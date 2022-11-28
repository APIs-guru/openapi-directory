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
    
req = operations.MybusinessbusinessinformationAccountsLocationsCreateRequest(
    path_params=operations.MybusinessbusinessinformationAccountsLocationsCreatePathParams(
        parent="libero",
    ),
    query_params=operations.MybusinessbusinessinformationAccountsLocationsCreateQueryParams(
        dollar_xgafv="2",
        access_token="odit",
        alt="proto",
        callback="eum",
        fields="sit",
        key="tenetur",
        oauth_token="voluptatem",
        pretty_print=True,
        quota_user="est",
        request_id="explicabo",
        upload_type="quia",
        upload_protocol="illum",
        validate_only=True,
    ),
    request=shared.LocationInput(
        ad_words_location_extensions=shared.AdWordsLocationExtensions(
            ad_phone="illum",
        ),
        categories=shared.CategoriesInput(
            additional_categories=[
                shared.CategoryInput(
                    name="perspiciatis",
                ),
            ],
            primary_category=shared.CategoryInput(
                name="et",
            ),
        ),
        labels=[
            "quo",
            "dolore",
            "eum",
        ],
        language_code="non",
        latlng=shared.LatLng(
            latitude=69.099998,
            longitude=82.099998,
        ),
        more_hours=[
            shared.MoreHours(
                hours_type_id="mollitia",
                periods=[
                    shared.TimePeriod(
                        close_day="THURSDAY",
                        close_time=shared.TimeOfDay(
                            hours=362439674537433464,
                            minutes=5592977181999155684,
                            nanos=4546169383228116168,
                            seconds=5088318187350289063,
                        ),
                        open_day="SATURDAY",
                        open_time=shared.TimeOfDay(
                            hours=2418076152276229764,
                            minutes=7762466640732174122,
                            nanos=6941231064367346566,
                            seconds=197936525305537892,
                        ),
                    ),
                    shared.TimePeriod(
                        close_day="WEDNESDAY",
                        close_time=shared.TimeOfDay(
                            hours=4650935838865454153,
                            minutes=1188395243519367524,
                            nanos=4712713175942510196,
                            seconds=7208814649896680255,
                        ),
                        open_day="WEDNESDAY",
                        open_time=shared.TimeOfDay(
                            hours=5735307111172916220,
                            minutes=8768700199555435333,
                            nanos=198022425704256756,
                            seconds=7460475701189497067,
                        ),
                    ),
                    shared.TimePeriod(
                        close_day="SUNDAY",
                        close_time=shared.TimeOfDay(
                            hours=224697432882219189,
                            minutes=7236311762337614376,
                            nanos=924164461781123107,
                            seconds=6728281231694557160,
                        ),
                        open_day="SUNDAY",
                        open_time=shared.TimeOfDay(
                            hours=7699856789253341874,
                            minutes=2307016911102313691,
                            nanos=8070841639742139712,
                            seconds=8249940597302262118,
                        ),
                    ),
                ],
            ),
            shared.MoreHours(
                hours_type_id="eius",
                periods=[
                    shared.TimePeriod(
                        close_day="WEDNESDAY",
                        close_time=shared.TimeOfDay(
                            hours=5853833349788936843,
                            minutes=1021614946430302668,
                            nanos=6244958831658543478,
                            seconds=7644969593495325328,
                        ),
                        open_day="THURSDAY",
                        open_time=shared.TimeOfDay(
                            hours=6791288773140694802,
                            minutes=6592594650285513025,
                            nanos=2795860774976171589,
                            seconds=8188544995744384376,
                        ),
                    ),
                    shared.TimePeriod(
                        close_day="TUESDAY",
                        close_time=shared.TimeOfDay(
                            hours=7499320018626275312,
                            minutes=8858932334642543268,
                            nanos=9204438152282402779,
                            seconds=2241765145493959895,
                        ),
                        open_day="WEDNESDAY",
                        open_time=shared.TimeOfDay(
                            hours=3712396041295168985,
                            minutes=4058216714084853740,
                            nanos=326066148651249971,
                            seconds=8290724554251344738,
                        ),
                    ),
                    shared.TimePeriod(
                        close_day="TUESDAY",
                        close_time=shared.TimeOfDay(
                            hours=4270553227883750691,
                            minutes=5633296492787808627,
                            nanos=8114418921173693040,
                            seconds=2945966162751075419,
                        ),
                        open_day="DAY_OF_WEEK_UNSPECIFIED",
                        open_time=shared.TimeOfDay(
                            hours=6636518955529658358,
                            minutes=8185989858534526663,
                            nanos=157684873306664347,
                            seconds=6616319257068410543,
                        ),
                    ),
                ],
            ),
        ],
        name="modi",
        open_info=shared.OpenInfoInput(
            opening_date=shared.Date(
                day=3781140949000493454,
                month=4306500671919340872,
                year=3941949280417042457,
            ),
            status="CLOSED_TEMPORARILY",
        ),
        phone_numbers=shared.PhoneNumbers(
            additional_phones=[
                "voluptatem",
                "voluptatem",
                "temporibus",
            ],
            primary_phone="quam",
        ),
        profile=shared.Profile(
            description="necessitatibus",
        ),
        regular_hours=shared.BusinessHours(
            periods=[
                shared.TimePeriod(
                    close_day="SUNDAY",
                    close_time=shared.TimeOfDay(
                        hours=812733258384458076,
                        minutes=5388553801043562202,
                        nanos=4213281503838971721,
                        seconds=4238994572124348340,
                    ),
                    open_day="DAY_OF_WEEK_UNSPECIFIED",
                    open_time=shared.TimeOfDay(
                        hours=2077172109625829910,
                        minutes=5006152875917678633,
                        nanos=3435326265394591343,
                        seconds=3032618834197031037,
                    ),
                ),
                shared.TimePeriod(
                    close_day="TUESDAY",
                    close_time=shared.TimeOfDay(
                        hours=2305083587581389538,
                        minutes=3083549253498686385,
                        nanos=4582314473479600039,
                        seconds=6247756121453465261,
                    ),
                    open_day="MONDAY",
                    open_time=shared.TimeOfDay(
                        hours=7261596107366123483,
                        minutes=4917180700220100766,
                        nanos=6449885474933651091,
                        seconds=408755297423103518,
                    ),
                ),
            ],
        ),
        relationship_data=shared.RelationshipData(
            children_locations=[
                shared.RelevantLocation(
                    place_id="vitae",
                    relation_type="INDEPENDENT_ESTABLISHMENT_IN",
                ),
            ],
            parent_chain="fugit",
            parent_location=shared.RelevantLocation(
                place_id="amet",
                relation_type="INDEPENDENT_ESTABLISHMENT_IN",
            ),
        ),
        service_area=shared.ServiceAreaBusiness(
            business_type="BUSINESS_TYPE_UNSPECIFIED",
            places=shared.Places(
                place_infos=[
                    shared.PlaceInfo(
                        place_id="doloremque",
                        place_name="delectus",
                    ),
                    shared.PlaceInfo(
                        place_id="aspernatur",
                        place_name="exercitationem",
                    ),
                ],
            ),
            region_code="qui",
        ),
        service_items=[
            shared.ServiceItem(
                free_form_service_item=shared.FreeFormServiceItem(
                    category="aliquid",
                    label=shared.Label(
                        description="rerum",
                        display_name="ab",
                        language_code="et",
                    ),
                ),
                price=shared.Money(
                    currency_code="omnis",
                    nanos=4929758119589791402,
                    units="illum",
                ),
                structured_service_item=shared.StructuredServiceItem(
                    description="necessitatibus",
                    service_type_id="labore",
                ),
            ),
        ],
        special_hours=shared.SpecialHours(
            special_hour_periods=[
                shared.SpecialHourPeriod(
                    close_time=shared.TimeOfDay(
                        hours=3222008006196313405,
                        minutes=8141538113356155902,
                        nanos=2083398587625733217,
                        seconds=1920556121540402017,
                    ),
                    closed=False,
                    end_date=shared.Date(
                        day=343166000667295263,
                        month=7015877390982513274,
                        year=1434854330249448151,
                    ),
                    open_time=shared.TimeOfDay(
                        hours=9042610006426685816,
                        minutes=1729556463384848332,
                        nanos=1790269723380542375,
                        seconds=7955354439162347273,
                    ),
                    start_date=shared.Date(
                        day=8257459218013048958,
                        month=1511305980227211375,
                        year=8980409353330380210,
                    ),
                ),
            ],
        ),
        store_code="rerum",
        storefront_address=shared.PostalAddress(
            address_lines=[
                "vitae",
                "fugiat",
            ],
            administrative_area="rem",
            language_code="rerum",
            locality="atque",
            organization="ullam",
            postal_code="vero",
            recipients=[
                "aspernatur",
            ],
            region_code="eius",
            revision=4153565705517318178,
            sorting_code="nihil",
            sublocality="quos",
        ),
        title="facilis",
        website_uri="debitis",
    ),
)
    
res = s.accounts.mybusinessbusinessinformation_accounts_locations_create(req)

if res.location is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `mybusinessbusinessinformation_accounts_locations_create` - Creates a new Location that will be owned by the logged in user.
* `mybusinessbusinessinformation_accounts_locations_list` - Lists the locations for the specified account.

### attributes

* `mybusinessbusinessinformation_attributes_list` - Returns the list of attributes that would be available for a location with the given primary category and country.

### categories

* `mybusinessbusinessinformation_categories_batch_get` - Returns a list of business categories for the provided language and GConcept ids.
* `mybusinessbusinessinformation_categories_list` - Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### chains

* `mybusinessbusinessinformation_chains_search` - Searches the chain based on chain name.

### googleLocations

* `mybusinessbusinessinformation_google_locations_search` - Search all of the possible locations that are a match to the specified request.

### locations

* `mybusinessbusinessinformation_locations_associate` - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.
* `mybusinessbusinessinformation_locations_attributes_get_google_updated` - Gets the Google-updated version of the specified location.
* `mybusinessbusinessinformation_locations_clear_location_association` - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* `mybusinessbusinessinformation_locations_delete` - Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
* `mybusinessbusinessinformation_locations_get_attributes` - Looks up all the attributes set for a given location.
* `mybusinessbusinessinformation_locations_update_attributes` - Update attributes for a given location.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
