# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest(
    security=operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreatePathParams(
        parent="minima",
    ),
    query_params=operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateQueryParams(
        dollar_xgafv="2",
        access_token="a",
        alt="json",
        callback="porro",
        fields="omnis",
        key="sequi",
        oauth_token="voluptatem",
        pretty_print=True,
        quota_user="animi",
        upload_type="suscipit",
        upload_protocol="blanditiis",
    ),
    request=shared.GoogleCloudContactcenterinsightsV1AnalysisInput(
        analysis_result=shared.GoogleCloudContactcenterinsightsV1AnalysisResult(
            call_analysis_metadata=shared.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata(
                annotations=[
                    shared.GoogleCloudContactcenterinsightsV1CallAnnotation(
                        annotation_end_boundary=shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary(
                            transcript_index=5178477850341511234,
                            word_index=8923859297648267097,
                        ),
                        annotation_start_boundary=shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary(
                            transcript_index=50550707071805504,
                            word_index=5498835279959267408,
                        ),
                        channel_tag=3850862362532702916,
                        entity_mention_data=shared.GoogleCloudContactcenterinsightsV1EntityMentionData(
                            entity_unique_id="dolorum",
                            sentiment=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                                magnitude=77.199997,
                                score=31.200001,
                            ),
                            type="PROPER",
                        ),
                        hold_data={
                            "aspernatur": "placeat",
                            "inventore": "voluptatem",
                            "minima": "quia",
                        },
                        intent_match_data=shared.GoogleCloudContactcenterinsightsV1IntentMatchData(
                            intent_unique_id="officiis",
                        ),
                        interruption_data={
                            "dolores": "aliquam",
                        },
                        issue_match_data=shared.GoogleCloudContactcenterinsightsV1IssueMatchData(
                            issue_assignment=shared.GoogleCloudContactcenterinsightsV1IssueAssignment(
                                display_name="sunt",
                                issue="ipsa",
                                score=61.200001,
                            ),
                        ),
                        phrase_match_data=shared.GoogleCloudContactcenterinsightsV1PhraseMatchData(
                            display_name="esse",
                            phrase_matcher="sed",
                        ),
                        sentiment_data=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=59.099998,
                            score=56.200001,
                        ),
                        silence_data={
                            "odio": "sunt",
                        },
                    ),
                    shared.GoogleCloudContactcenterinsightsV1CallAnnotation(
                        annotation_end_boundary=shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary(
                            transcript_index=8693142301946000333,
                            word_index=7594060307782908627,
                        ),
                        annotation_start_boundary=shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary(
                            transcript_index=6649830033022959116,
                            word_index=4645727424483645119,
                        ),
                        channel_tag=5016276992496389162,
                        entity_mention_data=shared.GoogleCloudContactcenterinsightsV1EntityMentionData(
                            entity_unique_id="vel",
                            sentiment=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                                magnitude=82.199997,
                                score=51.099998,
                            ),
                            type="MENTION_TYPE_UNSPECIFIED",
                        ),
                        hold_data={
                            "nihil": "et",
                            "aut": "totam",
                        },
                        intent_match_data=shared.GoogleCloudContactcenterinsightsV1IntentMatchData(
                            intent_unique_id="ad",
                        ),
                        interruption_data={
                            "ea": "temporibus",
                        },
                        issue_match_data=shared.GoogleCloudContactcenterinsightsV1IssueMatchData(
                            issue_assignment=shared.GoogleCloudContactcenterinsightsV1IssueAssignment(
                                display_name="rerum",
                                issue="illum",
                                score=35.200001,
                            ),
                        ),
                        phrase_match_data=shared.GoogleCloudContactcenterinsightsV1PhraseMatchData(
                            display_name="repellat",
                            phrase_matcher="qui",
                        ),
                        sentiment_data=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=59.200001,
                            score=23.200001,
                        ),
                        silence_data={
                            "et": "est",
                        },
                    ),
                ],
                entities={
                    "voluptates": shared.GoogleCloudContactcenterinsightsV1Entity(
                        display_name="possimus",
                        metadata={
                            "ut": "doloribus",
                            "et": "debitis",
                            "et": "laboriosam",
                        },
                        salience=86.099998,
                        sentiment=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=57.200001,
                            score=58.200001,
                        ),
                        type="ADDRESS",
                    ),
                    "sit": shared.GoogleCloudContactcenterinsightsV1Entity(
                        display_name="harum",
                        metadata={
                            "inventore": "et",
                        },
                        salience=60.200001,
                        sentiment=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=51.099998,
                            score=8.100000,
                        ),
                        type="CONSUMER_GOOD",
                    ),
                },
                intents={
                    "nisi": shared.GoogleCloudContactcenterinsightsV1Intent(
                        display_name="delectus",
                        id="iste",
                    ),
                },
                issue_model_result=shared.GoogleCloudContactcenterinsightsV1IssueModelResult(
                    issue_model="accusamus",
                    issues=[
                        shared.GoogleCloudContactcenterinsightsV1IssueAssignment(
                            display_name="non",
                            issue="excepturi",
                            score=88.199997,
                        ),
                        shared.GoogleCloudContactcenterinsightsV1IssueAssignment(
                            display_name="aperiam",
                            issue="adipisci",
                            score=18.200001,
                        ),
                    ],
                ),
                phrase_matchers={
                    "ut": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData(
                        display_name="provident",
                        phrase_matcher="rerum",
                    ),
                    "est": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData(
                        display_name="placeat",
                        phrase_matcher="recusandae",
                    ),
                    "et": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData(
                        display_name="repudiandae",
                        phrase_matcher="autem",
                    ),
                },
                sentiments=[
                    shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment(
                        channel_tag=5435594425185608590,
                        sentiment_data=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=69.099998,
                            score=18.100000,
                        ),
                    ),
                    shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment(
                        channel_tag=8132631544243459716,
                        sentiment_data=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=55.200001,
                            score=70.199997,
                        ),
                    ),
                    shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment(
                        channel_tag=3716120439908127514,
                        sentiment_data=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=93.099998,
                            score=99.099998,
                        ),
                    ),
                ],
            ),
            end_time="odio",
        ),
        name="distinctio",
    ),
)
    
res = s.projects.contactcenterinsights_projects_locations_conversations_analyses_create(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `contactcenterinsights_projects_locations_conversations_analyses_create` - Creates an analysis. The long running operation is done when the analysis has completed.
* `contactcenterinsights_projects_locations_conversations_analyses_list` - Lists analyses.
* `contactcenterinsights_projects_locations_conversations_bulk_analyze` - Analyzes multiple conversations in a single request.
* `contactcenterinsights_projects_locations_conversations_calculate_stats` - Gets conversation statistics.
* `contactcenterinsights_projects_locations_conversations_create` - Creates a conversation.
* `contactcenterinsights_projects_locations_conversations_ingest` - Imports conversations and processes them according to the user's configuration.
* `contactcenterinsights_projects_locations_conversations_list` - Lists conversations.
* `contactcenterinsights_projects_locations_insightsdata_export` - Export insights data to a destination defined in the request body.
* `contactcenterinsights_projects_locations_issue_models_calculate_issue_model_stats` - Gets an issue model's statistics.
* `contactcenterinsights_projects_locations_issue_models_create` - Creates an issue model.
* `contactcenterinsights_projects_locations_issue_models_deploy` - Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
* `contactcenterinsights_projects_locations_issue_models_issues_list` - Lists issues.
* `contactcenterinsights_projects_locations_issue_models_list` - Lists issue models.
* `contactcenterinsights_projects_locations_issue_models_undeploy` - Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
* `contactcenterinsights_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `contactcenterinsights_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `contactcenterinsights_projects_locations_phrase_matchers_create` - Creates a phrase matcher.
* `contactcenterinsights_projects_locations_phrase_matchers_list` - Lists phrase matchers.
* `contactcenterinsights_projects_locations_views_create` - Creates a view.
* `contactcenterinsights_projects_locations_views_delete` - Deletes a view.
* `contactcenterinsights_projects_locations_views_get` - Gets a view.
* `contactcenterinsights_projects_locations_views_list` - Lists views.
* `contactcenterinsights_projects_locations_views_patch` - Updates a view.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
