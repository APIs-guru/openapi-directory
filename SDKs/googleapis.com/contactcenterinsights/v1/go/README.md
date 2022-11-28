# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest{
        Security: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreatePathParams{
            Parent: "minima",
        },
        QueryParams: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "a",
            Alt: "json",
            Callback: "porro",
            Fields: "omnis",
            Key: "sequi",
            OauthToken: "voluptatem",
            PrettyPrint: true,
            QuotaUser: "animi",
            UploadType: "suscipit",
            UploadProtocol: "blanditiis",
        },
        Request: &shared.GoogleCloudContactcenterinsightsV1AnalysisInput{
            AnalysisResult: &shared.GoogleCloudContactcenterinsightsV1AnalysisResult{
                CallAnalysisMetadata: &shared.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata{
                    Annotations: []shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 5178477850341511234,
                                WordIndex: 8923859297648267097,
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 50550707071805504,
                                WordIndex: 5498835279959267408,
                            },
                            ChannelTag: 3850862362532702916,
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: "dolorum",
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: 77.199997,
                                    Score: 31.200001,
                                },
                                Type: "PROPER",
                            },
                            HoldData: map[string]interface{}{
                                "aspernatur": "placeat",
                                "inventore": "voluptatem",
                                "minima": "quia",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: "officiis",
                            },
                            InterruptionData: map[string]interface{}{
                                "dolores": "aliquam",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: "sunt",
                                    Issue: "ipsa",
                                    Score: 61.200001,
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: "esse",
                                PhraseMatcher: "sed",
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 59.099998,
                                Score: 56.200001,
                            },
                            SilenceData: map[string]interface{}{
                                "odio": "sunt",
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1CallAnnotation{
                            AnnotationEndBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 8693142301946000333,
                                WordIndex: 7594060307782908627,
                            },
                            AnnotationStartBoundary: &shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary{
                                TranscriptIndex: 6649830033022959116,
                                WordIndex: 4645727424483645119,
                            },
                            ChannelTag: 5016276992496389162,
                            EntityMentionData: &shared.GoogleCloudContactcenterinsightsV1EntityMentionData{
                                EntityUniqueID: "vel",
                                Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                    Magnitude: 82.199997,
                                    Score: 51.099998,
                                },
                                Type: "MENTION_TYPE_UNSPECIFIED",
                            },
                            HoldData: map[string]interface{}{
                                "nihil": "et",
                                "aut": "totam",
                            },
                            IntentMatchData: &shared.GoogleCloudContactcenterinsightsV1IntentMatchData{
                                IntentUniqueID: "ad",
                            },
                            InterruptionData: map[string]interface{}{
                                "ea": "temporibus",
                            },
                            IssueMatchData: &shared.GoogleCloudContactcenterinsightsV1IssueMatchData{
                                IssueAssignment: &shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                    DisplayName: "rerum",
                                    Issue: "illum",
                                    Score: 35.200001,
                                },
                            },
                            PhraseMatchData: &shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                                DisplayName: "repellat",
                                PhraseMatcher: "qui",
                            },
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 59.200001,
                                Score: 23.200001,
                            },
                            SilenceData: map[string]interface{}{
                                "et": "est",
                            },
                        },
                    },
                    Entities: map[string]shared.GoogleCloudContactcenterinsightsV1Entity{
                        "voluptates": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "possimus",
                            Metadata: map[string]string{
                                "ut": "doloribus",
                                "et": "debitis",
                                "et": "laboriosam",
                            },
                            Salience: 86.099998,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 57.200001,
                                Score: 58.200001,
                            },
                            Type: "ADDRESS",
                        },
                        "sit": shared.GoogleCloudContactcenterinsightsV1Entity{
                            DisplayName: "harum",
                            Metadata: map[string]string{
                                "inventore": "et",
                            },
                            Salience: 60.200001,
                            Sentiment: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 51.099998,
                                Score: 8.100000,
                            },
                            Type: "CONSUMER_GOOD",
                        },
                    },
                    Intents: map[string]shared.GoogleCloudContactcenterinsightsV1Intent{
                        "nisi": shared.GoogleCloudContactcenterinsightsV1Intent{
                            DisplayName: "delectus",
                            ID: "iste",
                        },
                    },
                    IssueModelResult: &shared.GoogleCloudContactcenterinsightsV1IssueModelResult{
                        IssueModel: "accusamus",
                        Issues: []shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                            shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                DisplayName: "non",
                                Issue: "excepturi",
                                Score: 88.199997,
                            },
                            shared.GoogleCloudContactcenterinsightsV1IssueAssignment{
                                DisplayName: "aperiam",
                                Issue: "adipisci",
                                Score: 18.200001,
                            },
                        },
                    },
                    PhraseMatchers: map[string]shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                        "ut": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: "provident",
                            PhraseMatcher: "rerum",
                        },
                        "est": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: "placeat",
                            PhraseMatcher: "recusandae",
                        },
                        "et": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData{
                            DisplayName: "repudiandae",
                            PhraseMatcher: "autem",
                        },
                    },
                    Sentiments: []shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: 5435594425185608590,
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 69.099998,
                                Score: 18.100000,
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: 8132631544243459716,
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 55.200001,
                                Score: 70.199997,
                            },
                        },
                        shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment{
                            ChannelTag: 3716120439908127514,
                            SentimentData: &shared.GoogleCloudContactcenterinsightsV1SentimentData{
                                Magnitude: 93.099998,
                                Score: 99.099998,
                            },
                        },
                    },
                },
                EndTime: "odio",
            },
            Name: "distinctio",
        },
    }
    
    res, err := s.Projects.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `ContactcenterinsightsProjectsLocationsConversationsAnalysesCreate` - Creates an analysis. The long running operation is done when the analysis has completed.
* `ContactcenterinsightsProjectsLocationsConversationsAnalysesList` - Lists analyses.
* `ContactcenterinsightsProjectsLocationsConversationsBulkAnalyze` - Analyzes multiple conversations in a single request.
* `ContactcenterinsightsProjectsLocationsConversationsCalculateStats` - Gets conversation statistics.
* `ContactcenterinsightsProjectsLocationsConversationsCreate` - Creates a conversation.
* `ContactcenterinsightsProjectsLocationsConversationsIngest` - Imports conversations and processes them according to the user's configuration.
* `ContactcenterinsightsProjectsLocationsConversationsList` - Lists conversations.
* `ContactcenterinsightsProjectsLocationsInsightsdataExport` - Export insights data to a destination defined in the request body.
* `ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats` - Gets an issue model's statistics.
* `ContactcenterinsightsProjectsLocationsIssueModelsCreate` - Creates an issue model.
* `ContactcenterinsightsProjectsLocationsIssueModelsDeploy` - Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
* `ContactcenterinsightsProjectsLocationsIssueModelsIssuesList` - Lists issues.
* `ContactcenterinsightsProjectsLocationsIssueModelsList` - Lists issue models.
* `ContactcenterinsightsProjectsLocationsIssueModelsUndeploy` - Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
* `ContactcenterinsightsProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `ContactcenterinsightsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `ContactcenterinsightsProjectsLocationsPhraseMatchersCreate` - Creates a phrase matcher.
* `ContactcenterinsightsProjectsLocationsPhraseMatchersList` - Lists phrase matchers.
* `ContactcenterinsightsProjectsLocationsViewsCreate` - Creates a view.
* `ContactcenterinsightsProjectsLocationsViewsDelete` - Deletes a view.
* `ContactcenterinsightsProjectsLocationsViewsGet` - Gets a view.
* `ContactcenterinsightsProjectsLocationsViewsList` - Lists views.
* `ContactcenterinsightsProjectsLocationsViewsPatch` - Updates a view.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
