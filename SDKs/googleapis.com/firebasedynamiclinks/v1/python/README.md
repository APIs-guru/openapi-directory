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
    
req = operations.FirebasedynamiclinksManagedShortLinksCreateRequest(
    security=operations.FirebasedynamiclinksManagedShortLinksCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.FirebasedynamiclinksManagedShortLinksCreateQueryParams(
        dollar_xgafv="1",
        access_token="ex",
        alt="proto",
        callback="ad",
        fields="atque",
        key="aut",
        oauth_token="laborum",
        pretty_print=True,
        quota_user="ullam",
        upload_type="sit",
        upload_protocol="dolores",
    ),
    request=shared.CreateManagedShortLinkRequest(
        dynamic_link_info=shared.DynamicLinkInfo(
            analytics_info=shared.AnalyticsInfo(
                google_play_analytics=shared.GooglePlayAnalytics(
                    gclid="amet",
                    utm_campaign="cupiditate",
                    utm_content="sit",
                    utm_medium="est",
                    utm_source="quasi",
                    utm_term="molestiae",
                ),
                itunes_connect_analytics=shared.ITunesConnectAnalytics(
                    at="recusandae",
                    ct="rem",
                    mt="eos",
                    pt="ut",
                ),
            ),
            android_info=shared.AndroidInfo(
                android_fallback_link="est",
                android_link="aut",
                android_min_package_version_code="voluptatem",
                android_package_name="nulla",
            ),
            desktop_info=shared.DesktopInfo(
                desktop_fallback_link="voluptatibus",
            ),
            domain_uri_prefix="quibusdam",
            dynamic_link_domain="quod",
            ios_info=shared.IosInfo(
                ios_app_store_id="nihil",
                ios_bundle_id="maxime",
                ios_custom_scheme="nobis",
                ios_fallback_link="incidunt",
                ios_ipad_bundle_id="tenetur",
                ios_ipad_fallback_link="possimus",
                ios_minimum_version="occaecati",
            ),
            link="sequi",
            navigation_info=shared.NavigationInfo(
                enable_forced_redirect=True,
            ),
            social_meta_tag_info=shared.SocialMetaTagInfo(
                social_description="necessitatibus",
                social_image_link="voluptatem",
                social_title="accusantium",
            ),
        ),
        long_dynamic_link="qui",
        name="voluptas",
        sdk_version="mollitia",
        suffix=shared.Suffix(
            custom_suffix="aut",
            option="SHORT",
        ),
    ),
)
    
res = s.managed_short_links.firebasedynamiclinks_managed_short_links_create(req)

if res.create_managed_short_link_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### managedShortLinks

* `firebasedynamiclinks_managed_short_links_create` - Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### shortLinks

* `firebasedynamiclinks_short_links_create` - Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### v1

* `firebasedynamiclinks_get_link_stats` - Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
* `firebasedynamiclinks_install_attribution` - Get iOS strong/weak-match info for post-install attribution.
* `firebasedynamiclinks_reopen_attribution` - Get iOS reopen attribution for app universal link open deeplinking.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
