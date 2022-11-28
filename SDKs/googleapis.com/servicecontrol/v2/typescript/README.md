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
import { ServicecontrolServicesCheckRequest, ServicecontrolServicesCheckResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ServicecontrolServicesCheckRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  pathParams: {
    serviceName: "ut",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "est",
    alt: "proto",
    callback: "ut",
    fields: "deserunt",
    key: "accusamus",
    oauthToken: "quis",
    prettyPrint: false,
    quotaUser: "consequuntur",
    uploadType: "molestias",
    uploadProtocol: "beatae",
  },
  request: {
    attributes: {
      api: {
        operation: "autem",
        protocol: "voluptas",
        service: "iste",
        version: "qui",
      },
      destination: {
        ip: "ducimus",
        labels: {
          "consequatur": "odio",
        },
        port: "quidem",
        principal: "neque",
        regionCode: "excepturi",
      },
      extensions: [
        {
          "voluptates": "iusto",
          "magnam": "maiores",
          "ut": "et",
        },
        {
          "iure": "sit",
          "voluptatem": "aperiam",
          "numquam": "sed",
        },
      ],
      origin: {
        ip: "explicabo",
        labels: {
          "suscipit": "exercitationem",
          "dolorem": "veritatis",
        },
        port: "et",
        principal: "ducimus",
        regionCode: "nihil",
      },
      request: {
        auth: {
          accessLevels: [
            "nostrum",
          ],
          audiences: [
            "dolor",
            "pariatur",
            "quod",
          ],
          claims: {
            "doloribus": "accusamus",
            "reiciendis": "hic",
          },
          presenter: "aspernatur",
          principal: "possimus",
        },
        headers: {
          "eius": "nihil",
          "eius": "aliquid",
        },
        host: "ratione",
        id: "perferendis",
        method: "voluptatem",
        path: "voluptatum",
        protocol: "quisquam",
        query: "quia",
        reason: "magni",
        scheme: "perspiciatis",
        size: "quo",
        time: "reiciendis",
      },
      resource: {
        annotations: {
          "pariatur": "magni",
          "sit": "assumenda",
          "ut": "magni",
        },
        createTime: "culpa",
        deleteTime: "distinctio",
        displayName: "a",
        etag: "ex",
        labels: {
          "dolorem": "provident",
          "quia": "rerum",
        },
        location: "ad",
        name: "voluptatem",
        service: "qui",
        type: "soluta",
        uid: "nisi",
        updateTime: "distinctio",
      },
      response: {
        backendLatency: "aspernatur",
        code: "quidem",
        headers: {
          "aut": "dicta",
        },
        size: "voluptas",
        time: "unde",
      },
      source: {
        ip: "ipsum",
        labels: {
          "quia": "cumque",
          "nobis": "qui",
        },
        port: "odit",
        principal: "est",
        regionCode: "et",
      },
    },
    flags: "magnam",
    resources: [
      {
        container: "porro",
        location: "cum",
        name: "doloribus",
        permission: "recusandae",
        type: "nostrum",
      },
      {
        container: "odit",
        location: "illum",
        name: "vero",
        permission: "molestiae",
        type: "rem",
      },
      {
        container: "et",
        location: "sapiente",
        name: "quis",
        permission: "numquam",
        type: "inventore",
      },
    ],
    serviceConfigId: "nobis",
  },
};

sdk.services.servicecontrolServicesCheck(req).then((res: ServicecontrolServicesCheckResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### services

* `servicecontrolServicesCheck` - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* `servicecontrolServicesReport` - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
