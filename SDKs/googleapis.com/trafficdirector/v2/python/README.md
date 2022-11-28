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
    
req = operations.TrafficdirectorDiscoveryClientStatusRequest(
    security=operations.TrafficdirectorDiscoveryClientStatusSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.TrafficdirectorDiscoveryClientStatusQueryParams(
        dollar_xgafv="1",
        access_token="error",
        alt="media",
        callback="quos",
        fields="repellat",
        key="beatae",
        oauth_token="iusto",
        pretty_print=False,
        quota_user="similique",
        upload_type="qui",
        upload_protocol="architecto",
    ),
    request=shared.ClientStatusRequest(
        node_matchers=[
            shared.NodeMatcher(
                node_id=shared.StringMatcher(
                    exact="aut",
                    ignore_case=False,
                    prefix="dolores",
                    regex="consequuntur",
                    safe_regex=shared.RegexMatcher(
                        google_re2=shared.GoogleRe2(
                            max_program_size=7453439902694599752,
                        ),
                        regex="id",
                    ),
                    suffix="esse",
                ),
                node_metadatas=[
                    shared.StructMatcher(
                        path=[
                            shared.PathSegment(
                                key="quaerat",
                            ),
                        ],
                        value=shared.ValueMatcher(
                            bool_match=False,
                            double_match=shared.DoubleMatcher(
                                exact=47.200001,
                                range=shared.DoubleRange(
                                    end=13.100000,
                                    start=50.099998,
                                ),
                            ),
                            list_match=shared.ListMatcher(
                                one_of=shared.ValueMatcher(
                                
                                ),
                            ),
                            null_match={
                                "vitae": "laborum",
                                "vitae": "nihil",
                                "excepturi": "dolores",
                            },
                            present_match=False,
                            string_match=shared.StringMatcher(
                                exact="ut",
                                ignore_case=True,
                                prefix="ullam",
                                regex="voluptas",
                                safe_regex=shared.RegexMatcher(
                                    google_re2=shared.GoogleRe2(
                                        max_program_size=8920998268577836284,
                                    ),
                                    regex="sequi",
                                ),
                                suffix="eum",
                            ),
                        ),
                    ),
                    shared.StructMatcher(
                        path=[
                            shared.PathSegment(
                                key="animi",
                            ),
                            shared.PathSegment(
                                key="veritatis",
                            ),
                            shared.PathSegment(
                                key="quas",
                            ),
                        ],
                        value=shared.ValueMatcher(
                            bool_match=False,
                            double_match=shared.DoubleMatcher(
                                exact=68.199997,
                                range=shared.DoubleRange(
                                    end=31.100000,
                                    start=78.099998,
                                ),
                            ),
                            list_match=shared.ListMatcher(
                                one_of=shared.ValueMatcher(
                                
                                ),
                            ),
                            null_match={
                                "et": "temporibus",
                                "reiciendis": "totam",
                                "sed": "labore",
                            },
                            present_match=True,
                            string_match=shared.StringMatcher(
                                exact="voluptatem",
                                ignore_case=False,
                                prefix="qui",
                                regex="iusto",
                                safe_regex=shared.RegexMatcher(
                                    google_re2=shared.GoogleRe2(
                                        max_program_size=4519647800677519930,
                                    ),
                                    regex="quae",
                                ),
                                suffix="nisi",
                            ),
                        ),
                    ),
                    shared.StructMatcher(
                        path=[
                            shared.PathSegment(
                                key="recusandae",
                            ),
                            shared.PathSegment(
                                key="veritatis",
                            ),
                        ],
                        value=shared.ValueMatcher(
                            bool_match=True,
                            double_match=shared.DoubleMatcher(
                                exact=81.099998,
                                range=shared.DoubleRange(
                                    end=10.100000,
                                    start=36.200001,
                                ),
                            ),
                            list_match=shared.ListMatcher(
                                one_of=shared.ValueMatcher(
                                
                                ),
                            ),
                            null_match={
                                "similique": "ut",
                            },
                            present_match=True,
                            string_match=shared.StringMatcher(
                                exact="earum",
                                ignore_case=False,
                                prefix="voluptatem",
                                regex="hic",
                                safe_regex=shared.RegexMatcher(
                                    google_re2=shared.GoogleRe2(
                                        max_program_size=1213782071673588914,
                                    ),
                                    regex="fugiat",
                                ),
                                suffix="cum",
                            ),
                        ),
                    ),
                ],
            ),
            shared.NodeMatcher(
                node_id=shared.StringMatcher(
                    exact="vel",
                    ignore_case=False,
                    prefix="explicabo",
                    regex="aut",
                    safe_regex=shared.RegexMatcher(
                        google_re2=shared.GoogleRe2(
                            max_program_size=7874805523998436429,
                        ),
                        regex="sint",
                    ),
                    suffix="repellat",
                ),
                node_metadatas=[
                    shared.StructMatcher(
                        path=[
                            shared.PathSegment(
                                key="non",
                            ),
                            shared.PathSegment(
                                key="unde",
                            ),
                        ],
                        value=shared.ValueMatcher(
                            bool_match=False,
                            double_match=shared.DoubleMatcher(
                                exact=83.199997,
                                range=shared.DoubleRange(
                                    end=71.099998,
                                    start=90.099998,
                                ),
                            ),
                            list_match=shared.ListMatcher(
                                one_of=shared.ValueMatcher(
                                
                                ),
                            ),
                            null_match={
                                "natus": "aut",
                                "qui": "facilis",
                            },
                            present_match=False,
                            string_match=shared.StringMatcher(
                                exact="excepturi",
                                ignore_case=True,
                                prefix="eligendi",
                                regex="praesentium",
                                safe_regex=shared.RegexMatcher(
                                    google_re2=shared.GoogleRe2(
                                        max_program_size=5827889564704785700,
                                    ),
                                    regex="tenetur",
                                ),
                                suffix="est",
                            ),
                        ),
                    ),
                    shared.StructMatcher(
                        path=[
                            shared.PathSegment(
                                key="et",
                            ),
                            shared.PathSegment(
                                key="magni",
                            ),
                        ],
                        value=shared.ValueMatcher(
                            bool_match=True,
                            double_match=shared.DoubleMatcher(
                                exact=22.200001,
                                range=shared.DoubleRange(
                                    end=19.200001,
                                    start=54.099998,
                                ),
                            ),
                            list_match=shared.ListMatcher(
                                one_of=shared.ValueMatcher(
                                
                                ),
                            ),
                            null_match={
                                "qui": "quas",
                            },
                            present_match=True,
                            string_match=shared.StringMatcher(
                                exact="sunt",
                                ignore_case=True,
                                prefix="cupiditate",
                                regex="cumque",
                                safe_regex=shared.RegexMatcher(
                                    google_re2=shared.GoogleRe2(
                                        max_program_size=4086921742091866397,
                                    ),
                                    regex="voluptatem",
                                ),
                                suffix="in",
                            ),
                        ),
                    ),
                ],
            ),
            shared.NodeMatcher(
                node_id=shared.StringMatcher(
                    exact="et",
                    ignore_case=False,
                    prefix="laborum",
                    regex="adipisci",
                    safe_regex=shared.RegexMatcher(
                        google_re2=shared.GoogleRe2(
                            max_program_size=550283095766738378,
                        ),
                        regex="autem",
                    ),
                    suffix="ut",
                ),
                node_metadatas=[
                    shared.StructMatcher(
                        path=[
                            shared.PathSegment(
                                key="voluptas",
                            ),
                            shared.PathSegment(
                                key="dolore",
                            ),
                        ],
                        value=shared.ValueMatcher(
                            bool_match=False,
                            double_match=shared.DoubleMatcher(
                                exact=56.200001,
                                range=shared.DoubleRange(
                                    end=10.100000,
                                    start=59.099998,
                                ),
                            ),
                            list_match=shared.ListMatcher(
                                one_of=shared.ValueMatcher(
                                
                                ),
                            ),
                            null_match={
                                "corrupti": "et",
                            },
                            present_match=False,
                            string_match=shared.StringMatcher(
                                exact="deserunt",
                                ignore_case=True,
                                prefix="at",
                                regex="tempora",
                                safe_regex=shared.RegexMatcher(
                                    google_re2=shared.GoogleRe2(
                                        max_program_size=4032087116125045137,
                                    ),
                                    regex="debitis",
                                ),
                                suffix="culpa",
                            ),
                        ),
                    ),
                ],
            ),
        ],
    ),
)
    
res = s.discovery.trafficdirector_discovery_client_status(req)

if res.client_status_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### discovery

* `trafficdirector_discovery_client_status`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
