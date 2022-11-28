# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest, ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "minima",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "a",
    alt: "json",
    callback: "porro",
    fields: "omnis",
    key: "sequi",
    oauthToken: "voluptatem",
    prettyPrint: true,
    quotaUser: "animi",
    uploadType: "suscipit",
    uploadProtocol: "blanditiis",
  },
  request: {
    analysisResult: {
      callAnalysisMetadata: {
        annotations: [
          {
            annotationEndBoundary: {
              transcriptIndex: 5178477850341511234,
              wordIndex: 8923859297648267097,
            },
            annotationStartBoundary: {
              transcriptIndex: 50550707071805504,
              wordIndex: 5498835279959267408,
            },
            channelTag: 3850862362532702916,
            entityMentionData: {
              entityUniqueId: "dolorum",
              sentiment: {
                magnitude: 77.199997,
                score: 31.200001,
              },
              type: "PROPER",
            },
            holdData: {
              "aspernatur": "placeat",
              "inventore": "voluptatem",
              "minima": "quia",
            },
            intentMatchData: {
              intentUniqueId: "officiis",
            },
            interruptionData: {
              "dolores": "aliquam",
            },
            issueMatchData: {
              issueAssignment: {
                displayName: "sunt",
                issue: "ipsa",
                score: 61.200001,
              },
            },
            phraseMatchData: {
              displayName: "esse",
              phraseMatcher: "sed",
            },
            sentimentData: {
              magnitude: 59.099998,
              score: 56.200001,
            },
            silenceData: {
              "odio": "sunt",
            },
          },
          {
            annotationEndBoundary: {
              transcriptIndex: 8693142301946000333,
              wordIndex: 7594060307782908627,
            },
            annotationStartBoundary: {
              transcriptIndex: 6649830033022959116,
              wordIndex: 4645727424483645119,
            },
            channelTag: 5016276992496389162,
            entityMentionData: {
              entityUniqueId: "vel",
              sentiment: {
                magnitude: 82.199997,
                score: 51.099998,
              },
              type: "MENTION_TYPE_UNSPECIFIED",
            },
            holdData: {
              "nihil": "et",
              "aut": "totam",
            },
            intentMatchData: {
              intentUniqueId: "ad",
            },
            interruptionData: {
              "ea": "temporibus",
            },
            issueMatchData: {
              issueAssignment: {
                displayName: "rerum",
                issue: "illum",
                score: 35.200001,
              },
            },
            phraseMatchData: {
              displayName: "repellat",
              phraseMatcher: "qui",
            },
            sentimentData: {
              magnitude: 59.200001,
              score: 23.200001,
            },
            silenceData: {
              "et": "est",
            },
          },
        ],
        entities: {
          "voluptates": {
            displayName: "possimus",
            metadata: {
              "ut": "doloribus",
              "et": "debitis",
              "et": "laboriosam",
            },
            salience: 86.099998,
            sentiment: {
              magnitude: 57.200001,
              score: 58.200001,
            },
            type: "ADDRESS",
          },
          "sit": {
            displayName: "harum",
            metadata: {
              "inventore": "et",
            },
            salience: 60.200001,
            sentiment: {
              magnitude: 51.099998,
              score: 8.100000,
            },
            type: "CONSUMER_GOOD",
          },
        },
        intents: {
          "nisi": {
            displayName: "delectus",
            id: "iste",
          },
        },
        issueModelResult: {
          issueModel: "accusamus",
          issues: [
            {
              displayName: "non",
              issue: "excepturi",
              score: 88.199997,
            },
            {
              displayName: "aperiam",
              issue: "adipisci",
              score: 18.200001,
            },
          ],
        },
        phraseMatchers: {
          "ut": {
            displayName: "provident",
            phraseMatcher: "rerum",
          },
          "est": {
            displayName: "placeat",
            phraseMatcher: "recusandae",
          },
          "et": {
            displayName: "repudiandae",
            phraseMatcher: "autem",
          },
        },
        sentiments: [
          {
            channelTag: 5435594425185608590,
            sentimentData: {
              magnitude: 69.099998,
              score: 18.100000,
            },
          },
          {
            channelTag: 8132631544243459716,
            sentimentData: {
              magnitude: 55.200001,
              score: 70.199997,
            },
          },
          {
            channelTag: 3716120439908127514,
            sentimentData: {
              magnitude: 93.099998,
              score: 99.099998,
            },
          },
        ],
      },
      endTime: "odio",
    },
    name: "distinctio",
  },
};

sdk.projects.contactcenterinsightsProjectsLocationsConversationsAnalysesCreate(req).then((res: ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `contactcenterinsightsProjectsLocationsConversationsAnalysesCreate` - Creates an analysis. The long running operation is done when the analysis has completed.
* `contactcenterinsightsProjectsLocationsConversationsAnalysesList` - Lists analyses.
* `contactcenterinsightsProjectsLocationsConversationsBulkAnalyze` - Analyzes multiple conversations in a single request.
* `contactcenterinsightsProjectsLocationsConversationsCalculateStats` - Gets conversation statistics.
* `contactcenterinsightsProjectsLocationsConversationsCreate` - Creates a conversation.
* `contactcenterinsightsProjectsLocationsConversationsIngest` - Imports conversations and processes them according to the user's configuration.
* `contactcenterinsightsProjectsLocationsConversationsList` - Lists conversations.
* `contactcenterinsightsProjectsLocationsInsightsdataExport` - Export insights data to a destination defined in the request body.
* `contactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats` - Gets an issue model's statistics.
* `contactcenterinsightsProjectsLocationsIssueModelsCreate` - Creates an issue model.
* `contactcenterinsightsProjectsLocationsIssueModelsDeploy` - Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
* `contactcenterinsightsProjectsLocationsIssueModelsIssuesList` - Lists issues.
* `contactcenterinsightsProjectsLocationsIssueModelsList` - Lists issue models.
* `contactcenterinsightsProjectsLocationsIssueModelsUndeploy` - Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
* `contactcenterinsightsProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `contactcenterinsightsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `contactcenterinsightsProjectsLocationsPhraseMatchersCreate` - Creates a phrase matcher.
* `contactcenterinsightsProjectsLocationsPhraseMatchersList` - Lists phrase matchers.
* `contactcenterinsightsProjectsLocationsViewsCreate` - Creates a view.
* `contactcenterinsightsProjectsLocationsViewsDelete` - Deletes a view.
* `contactcenterinsightsProjectsLocationsViewsGet` - Gets a view.
* `contactcenterinsightsProjectsLocationsViewsList` - Lists views.
* `contactcenterinsightsProjectsLocationsViewsPatch` - Updates a view.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
