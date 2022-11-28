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
    
req = operations.ServicecontrolServicesCheckRequest(
    security=operations.ServicecontrolServicesCheckSecurity(
        option1=operations.ServicecontrolServicesCheckSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.ServicecontrolServicesCheckPathParams(
        service_name="ut",
    ),
    query_params=operations.ServicecontrolServicesCheckQueryParams(
        dollar_xgafv="2",
        access_token="est",
        alt="proto",
        callback="ut",
        fields="deserunt",
        key="accusamus",
        oauth_token="quis",
        pretty_print=False,
        quota_user="consequuntur",
        upload_type="molestias",
        upload_protocol="beatae",
    ),
    request=shared.CheckRequest(
        attributes=shared.AttributeContext(
            api=shared.API(
                operation="autem",
                protocol="voluptas",
                service="iste",
                version="qui",
            ),
            destination=shared.Peer(
                ip="ducimus",
                labels={
                    "consequatur": "odio",
                },
                port="quidem",
                principal="neque",
                region_code="excepturi",
            ),
            extensions=[
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
            origin=shared.Peer(
                ip="explicabo",
                labels={
                    "suscipit": "exercitationem",
                    "dolorem": "veritatis",
                },
                port="et",
                principal="ducimus",
                region_code="nihil",
            ),
            request=shared.Request(
                auth=shared.Auth(
                    access_levels=[
                        "nostrum",
                    ],
                    audiences=[
                        "dolor",
                        "pariatur",
                        "quod",
                    ],
                    claims={
                        "doloribus": "accusamus",
                        "reiciendis": "hic",
                    },
                    presenter="aspernatur",
                    principal="possimus",
                ),
                headers={
                    "eius": "nihil",
                    "eius": "aliquid",
                },
                host="ratione",
                id="perferendis",
                method="voluptatem",
                path="voluptatum",
                protocol="quisquam",
                query="quia",
                reason="magni",
                scheme="perspiciatis",
                size="quo",
                time="reiciendis",
            ),
            resource=shared.Resource(
                annotations={
                    "pariatur": "magni",
                    "sit": "assumenda",
                    "ut": "magni",
                },
                create_time="culpa",
                delete_time="distinctio",
                display_name="a",
                etag="ex",
                labels={
                    "dolorem": "provident",
                    "quia": "rerum",
                },
                location="ad",
                name="voluptatem",
                service="qui",
                type="soluta",
                uid="nisi",
                update_time="distinctio",
            ),
            response=shared.Response(
                backend_latency="aspernatur",
                code="quidem",
                headers={
                    "aut": "dicta",
                },
                size="voluptas",
                time="unde",
            ),
            source=shared.Peer(
                ip="ipsum",
                labels={
                    "quia": "cumque",
                    "nobis": "qui",
                },
                port="odit",
                principal="est",
                region_code="et",
            ),
        ),
        flags="magnam",
        resources=[
            shared.ResourceInfo(
                container="porro",
                location="cum",
                name="doloribus",
                permission="recusandae",
                type="nostrum",
            ),
            shared.ResourceInfo(
                container="odit",
                location="illum",
                name="vero",
                permission="molestiae",
                type="rem",
            ),
            shared.ResourceInfo(
                container="et",
                location="sapiente",
                name="quis",
                permission="numquam",
                type="inventore",
            ),
        ],
        service_config_id="nobis",
    ),
)
    
res = s.services.servicecontrol_services_check(req)

if res.check_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### services

* `servicecontrol_services_check` - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* `servicecontrol_services_report` - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
