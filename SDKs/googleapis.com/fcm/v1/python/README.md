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
    
req = operations.FcmProjectsMessagesSendRequest(
    security=operations.FcmProjectsMessagesSendSecurity(
        option1=operations.FcmProjectsMessagesSendSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.FcmProjectsMessagesSendPathParams(
        parent="eaque",
    ),
    query_params=operations.FcmProjectsMessagesSendQueryParams(
        dollar_xgafv="1",
        access_token="magni",
        alt="json",
        callback="exercitationem",
        fields="et",
        key="recusandae",
        oauth_token="rem",
        pretty_print=False,
        quota_user="facilis",
        upload_type="provident",
        upload_protocol="illum",
    ),
    request=shared.SendMessageRequest(
        message=shared.Message(
            android=shared.AndroidConfig(
                collapse_key="est",
                data={
                    "illum": "quia",
                },
                direct_boot_ok=True,
                fcm_options=shared.AndroidFcmOptions(
                    analytics_label="quae",
                ),
                notification=shared.AndroidNotification(
                    body="consectetur",
                    body_loc_args=[
                        "aut",
                    ],
                    body_loc_key="praesentium",
                    bypass_proxy_notification=True,
                    channel_id="labore",
                    click_action="quisquam",
                    color="dicta",
                    default_light_settings=False,
                    default_sound=False,
                    default_vibrate_timings=False,
                    event_time="ut",
                    icon="et",
                    image="tempora",
                    light_settings=shared.LightSettings(
                        color=shared.Color(
                            alpha=37.200001,
                            blue=52.200001,
                            green=70.199997,
                            red=45.099998,
                        ),
                        light_off_duration="incidunt",
                        light_on_duration="iusto",
                    ),
                    local_only=False,
                    notification_count=9090797606458476403,
                    notification_priority="PRIORITY_HIGH",
                    sound="id",
                    sticky=False,
                    tag="autem",
                    ticker="consequatur",
                    title="officiis",
                    title_loc_args=[
                        "voluptate",
                        "doloribus",
                        "nesciunt",
                    ],
                    title_loc_key="exercitationem",
                    vibrate_timings=[
                        "ut",
                    ],
                    visibility="SECRET",
                ),
                priority="HIGH",
                restricted_package_name="ducimus",
                ttl="et",
            ),
            apns=shared.ApnsConfig(
                fcm_options=shared.ApnsFcmOptions(
                    analytics_label="quia",
                    image="error",
                ),
                headers={
                    "molestias": "sequi",
                },
                payload={
                    "id": "occaecati",
                    "nulla": "omnis",
                    "molestias": "nemo",
                },
            ),
            condition="provident",
            data={
                "officiis": "et",
                "eaque": "a",
                "odit": "velit",
            },
            fcm_options=shared.FcmOptions(
                analytics_label="est",
            ),
            name="sunt",
            notification=shared.Notification(
                body="nisi",
                image="commodi",
                title="facere",
            ),
            token="pariatur",
            topic="voluptate",
            webpush=shared.WebpushConfig(
                data={
                    "voluptatum": "perferendis",
                    "quis": "ab",
                    "et": "distinctio",
                },
                fcm_options=shared.WebpushFcmOptions(
                    analytics_label="doloremque",
                    link="voluptas",
                ),
                headers={
                    "consequatur": "alias",
                },
                notification={
                    "fuga": "ab",
                },
            ),
        ),
        validate_only=True,
    ),
)
    
res = s.projects.fcm_projects_messages_send(req)

if res.message is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `fcm_projects_messages_send` - Send a message to specified target (a registration token, topic or condition).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
