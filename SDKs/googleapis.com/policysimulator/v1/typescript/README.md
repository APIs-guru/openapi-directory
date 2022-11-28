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
import { PolicysimulatorProjectsLocationsReplaysCreateRequest, PolicysimulatorProjectsLocationsReplaysCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PolicysimulatorProjectsLocationsReplaysCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "quaerat",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "doloremque",
    alt: "json",
    callback: "numquam",
    fields: "a",
    key: "non",
    oauthToken: "itaque",
    prettyPrint: false,
    quotaUser: "quo",
    uploadType: "nisi",
    uploadProtocol: "deleniti",
  },
  request: {
    config: {
      logSource: "LOG_SOURCE_UNSPECIFIED",
      policyOverlay: {
        "consequatur": {
          auditConfigs: [
            {
              auditLogConfigs: [
                {
                  exemptedMembers: [
                    "voluptas",
                  ],
                  logType: "DATA_WRITE",
                },
              ],
              service: "minima",
            },
            {
              auditLogConfigs: [
                {
                  exemptedMembers: [
                    "alias",
                  ],
                  logType: "DATA_READ",
                },
                {
                  exemptedMembers: [
                    "et",
                  ],
                  logType: "DATA_READ",
                },
                {
                  exemptedMembers: [
                    "et",
                    "magnam",
                    "blanditiis",
                  ],
                  logType: "ADMIN_READ",
                },
              ],
              service: "debitis",
            },
            {
              auditLogConfigs: [
                {
                  exemptedMembers: [
                    "maiores",
                    "reprehenderit",
                    "quia",
                  ],
                  logType: "DATA_WRITE",
                },
                {
                  exemptedMembers: [
                    "officia",
                    "sunt",
                    "voluptatem",
                  ],
                  logType: "ADMIN_READ",
                },
              ],
              service: "esse",
            },
          ],
          bindings: [
            {
              condition: {
                description: "id",
                expression: "maxime",
                location: "minus",
                title: "sed",
              },
              members: [
                "distinctio",
                "rerum",
              ],
              role: "totam",
            },
            {
              condition: {
                description: "alias",
                expression: "temporibus",
                location: "delectus",
                title: "nemo",
              },
              members: [
                "accusantium",
                "illum",
              ],
              role: "quas",
            },
          ],
          etag: "in",
          version: 6969309311508923998,
        },
        "aut": {
          auditConfigs: [
            {
              auditLogConfigs: [
                {
                  exemptedMembers: [
                    "rerum",
                    "qui",
                  ],
                  logType: "DATA_WRITE",
                },
              ],
              service: "incidunt",
            },
            {
              auditLogConfigs: [
                {
                  exemptedMembers: [
                    "odio",
                  ],
                  logType: "LOG_TYPE_UNSPECIFIED",
                },
              ],
              service: "aperiam",
            },
          ],
          bindings: [
            {
              condition: {
                description: "dolorem",
                expression: "dolor",
                location: "iusto",
                title: "iusto",
              },
              members: [
                "alias",
                "atque",
              ],
              role: "vero",
            },
            {
              condition: {
                description: "est",
                expression: "quia",
                location: "qui",
                title: "iusto",
              },
              members: [
                "delectus",
                "recusandae",
              ],
              role: "repellat",
            },
            {
              condition: {
                description: "suscipit",
                expression: "autem",
                location: "accusamus",
                title: "autem",
              },
              members: [
                "laudantium",
              ],
              role: "debitis",
            },
          ],
          etag: "sapiente",
          version: 4681406324211410955,
        },
      },
    },
    resultsSummary: {
      differenceCount: 5234953397910843034,
      errorCount: 5846958317667548146,
      logCount: 7346453447501218193,
      newestDate: {
        day: 2943922309746592043,
        month: 4494203844848527318,
        year: 2227584911989376714,
      },
      oldestDate: {
        day: 2288355997085519707,
        month: 8427404750346864572,
        year: 8392707394207074712,
      },
      unchangedCount: 2636727003386611254,
    },
  },
};

sdk.projects.policysimulatorProjectsLocationsReplaysCreate(req).then((res: PolicysimulatorProjectsLocationsReplaysCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `policysimulatorProjectsLocationsReplaysCreate` - Creates and starts a Replay using the given ReplayConfig.
* `policysimulatorProjectsLocationsReplaysOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `policysimulatorProjectsLocationsReplaysResultsList` - Lists the results of running a Replay.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
