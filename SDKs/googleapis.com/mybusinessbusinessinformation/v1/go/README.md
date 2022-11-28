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
    
    req := operations.MybusinessbusinessinformationAccountsLocationsCreateRequest{
        PathParams: operations.MybusinessbusinessinformationAccountsLocationsCreatePathParams{
            Parent: "libero",
        },
        QueryParams: operations.MybusinessbusinessinformationAccountsLocationsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "odit",
            Alt: "proto",
            Callback: "eum",
            Fields: "sit",
            Key: "tenetur",
            OauthToken: "voluptatem",
            PrettyPrint: true,
            QuotaUser: "est",
            RequestID: "explicabo",
            UploadType: "quia",
            UploadProtocol: "illum",
            ValidateOnly: true,
        },
        Request: &shared.LocationInput{
            AdWordsLocationExtensions: &shared.AdWordsLocationExtensions{
                AdPhone: "illum",
            },
            Categories: &shared.CategoriesInput{
                AdditionalCategories: []shared.CategoryInput{
                    shared.CategoryInput{
                        Name: "perspiciatis",
                    },
                },
                PrimaryCategory: &shared.CategoryInput{
                    Name: "et",
                },
            },
            Labels: []string{
                "quo",
                "dolore",
                "eum",
            },
            LanguageCode: "non",
            Latlng: &shared.LatLng{
                Latitude: 69.099998,
                Longitude: 82.099998,
            },
            MoreHours: []shared.MoreHours{
                shared.MoreHours{
                    HoursTypeID: "mollitia",
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: "THURSDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 362439674537433464,
                                Minutes: 5592977181999155684,
                                Nanos: 4546169383228116168,
                                Seconds: 5088318187350289063,
                            },
                            OpenDay: "SATURDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 2418076152276229764,
                                Minutes: 7762466640732174122,
                                Nanos: 6941231064367346566,
                                Seconds: 197936525305537892,
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: "WEDNESDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 4650935838865454153,
                                Minutes: 1188395243519367524,
                                Nanos: 4712713175942510196,
                                Seconds: 7208814649896680255,
                            },
                            OpenDay: "WEDNESDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 5735307111172916220,
                                Minutes: 8768700199555435333,
                                Nanos: 198022425704256756,
                                Seconds: 7460475701189497067,
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: "SUNDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 224697432882219189,
                                Minutes: 7236311762337614376,
                                Nanos: 924164461781123107,
                                Seconds: 6728281231694557160,
                            },
                            OpenDay: "SUNDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 7699856789253341874,
                                Minutes: 2307016911102313691,
                                Nanos: 8070841639742139712,
                                Seconds: 8249940597302262118,
                            },
                        },
                    },
                },
                shared.MoreHours{
                    HoursTypeID: "eius",
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: "WEDNESDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 5853833349788936843,
                                Minutes: 1021614946430302668,
                                Nanos: 6244958831658543478,
                                Seconds: 7644969593495325328,
                            },
                            OpenDay: "THURSDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 6791288773140694802,
                                Minutes: 6592594650285513025,
                                Nanos: 2795860774976171589,
                                Seconds: 8188544995744384376,
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: "TUESDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 7499320018626275312,
                                Minutes: 8858932334642543268,
                                Nanos: 9204438152282402779,
                                Seconds: 2241765145493959895,
                            },
                            OpenDay: "WEDNESDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 3712396041295168985,
                                Minutes: 4058216714084853740,
                                Nanos: 326066148651249971,
                                Seconds: 8290724554251344738,
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: "TUESDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 4270553227883750691,
                                Minutes: 5633296492787808627,
                                Nanos: 8114418921173693040,
                                Seconds: 2945966162751075419,
                            },
                            OpenDay: "DAY_OF_WEEK_UNSPECIFIED",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 6636518955529658358,
                                Minutes: 8185989858534526663,
                                Nanos: 157684873306664347,
                                Seconds: 6616319257068410543,
                            },
                        },
                    },
                },
            },
            Name: "modi",
            OpenInfo: &shared.OpenInfoInput{
                OpeningDate: &shared.Date{
                    Day: 3781140949000493454,
                    Month: 4306500671919340872,
                    Year: 3941949280417042457,
                },
                Status: "CLOSED_TEMPORARILY",
            },
            PhoneNumbers: &shared.PhoneNumbers{
                AdditionalPhones: []string{
                    "voluptatem",
                    "voluptatem",
                    "temporibus",
                },
                PrimaryPhone: "quam",
            },
            Profile: &shared.Profile{
                Description: "necessitatibus",
            },
            RegularHours: &shared.BusinessHours{
                Periods: []shared.TimePeriod{
                    shared.TimePeriod{
                        CloseDay: "SUNDAY",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 812733258384458076,
                            Minutes: 5388553801043562202,
                            Nanos: 4213281503838971721,
                            Seconds: 4238994572124348340,
                        },
                        OpenDay: "DAY_OF_WEEK_UNSPECIFIED",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 2077172109625829910,
                            Minutes: 5006152875917678633,
                            Nanos: 3435326265394591343,
                            Seconds: 3032618834197031037,
                        },
                    },
                    shared.TimePeriod{
                        CloseDay: "TUESDAY",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 2305083587581389538,
                            Minutes: 3083549253498686385,
                            Nanos: 4582314473479600039,
                            Seconds: 6247756121453465261,
                        },
                        OpenDay: "MONDAY",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 7261596107366123483,
                            Minutes: 4917180700220100766,
                            Nanos: 6449885474933651091,
                            Seconds: 408755297423103518,
                        },
                    },
                },
            },
            RelationshipData: &shared.RelationshipData{
                ChildrenLocations: []shared.RelevantLocation{
                    shared.RelevantLocation{
                        PlaceID: "vitae",
                        RelationType: "INDEPENDENT_ESTABLISHMENT_IN",
                    },
                },
                ParentChain: "fugit",
                ParentLocation: &shared.RelevantLocation{
                    PlaceID: "amet",
                    RelationType: "INDEPENDENT_ESTABLISHMENT_IN",
                },
            },
            ServiceArea: &shared.ServiceAreaBusiness{
                BusinessType: "BUSINESS_TYPE_UNSPECIFIED",
                Places: &shared.Places{
                    PlaceInfos: []shared.PlaceInfo{
                        shared.PlaceInfo{
                            PlaceID: "doloremque",
                            PlaceName: "delectus",
                        },
                        shared.PlaceInfo{
                            PlaceID: "aspernatur",
                            PlaceName: "exercitationem",
                        },
                    },
                },
                RegionCode: "qui",
            },
            ServiceItems: []shared.ServiceItem{
                shared.ServiceItem{
                    FreeFormServiceItem: &shared.FreeFormServiceItem{
                        Category: "aliquid",
                        Label: &shared.Label{
                            Description: "rerum",
                            DisplayName: "ab",
                            LanguageCode: "et",
                        },
                    },
                    Price: &shared.Money{
                        CurrencyCode: "omnis",
                        Nanos: 4929758119589791402,
                        Units: "illum",
                    },
                    StructuredServiceItem: &shared.StructuredServiceItem{
                        Description: "necessitatibus",
                        ServiceTypeID: "labore",
                    },
                },
            },
            SpecialHours: &shared.SpecialHours{
                SpecialHourPeriods: []shared.SpecialHourPeriod{
                    shared.SpecialHourPeriod{
                        CloseTime: &shared.TimeOfDay{
                            Hours: 3222008006196313405,
                            Minutes: 8141538113356155902,
                            Nanos: 2083398587625733217,
                            Seconds: 1920556121540402017,
                        },
                        Closed: false,
                        EndDate: &shared.Date{
                            Day: 343166000667295263,
                            Month: 7015877390982513274,
                            Year: 1434854330249448151,
                        },
                        OpenTime: &shared.TimeOfDay{
                            Hours: 9042610006426685816,
                            Minutes: 1729556463384848332,
                            Nanos: 1790269723380542375,
                            Seconds: 7955354439162347273,
                        },
                        StartDate: &shared.Date{
                            Day: 8257459218013048958,
                            Month: 1511305980227211375,
                            Year: 8980409353330380210,
                        },
                    },
                },
            },
            StoreCode: "rerum",
            StorefrontAddress: &shared.PostalAddress{
                AddressLines: []string{
                    "vitae",
                    "fugiat",
                },
                AdministrativeArea: "rem",
                LanguageCode: "rerum",
                Locality: "atque",
                Organization: "ullam",
                PostalCode: "vero",
                Recipients: []string{
                    "aspernatur",
                },
                RegionCode: "eius",
                Revision: 4153565705517318178,
                SortingCode: "nihil",
                Sublocality: "quos",
            },
            Title: "facilis",
            WebsiteURI: "debitis",
        },
    }
    
    res, err := s.Accounts.MybusinessbusinessinformationAccountsLocationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Location != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `MybusinessbusinessinformationAccountsLocationsCreate` - Creates a new Location that will be owned by the logged in user.
* `MybusinessbusinessinformationAccountsLocationsList` - Lists the locations for the specified account.

### attributes

* `MybusinessbusinessinformationAttributesList` - Returns the list of attributes that would be available for a location with the given primary category and country.

### categories

* `MybusinessbusinessinformationCategoriesBatchGet` - Returns a list of business categories for the provided language and GConcept ids.
* `MybusinessbusinessinformationCategoriesList` - Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### chains

* `MybusinessbusinessinformationChainsSearch` - Searches the chain based on chain name.

### googleLocations

* `MybusinessbusinessinformationGoogleLocationsSearch` - Search all of the possible locations that are a match to the specified request.

### locations

* `MybusinessbusinessinformationLocationsAssociate` - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.
* `MybusinessbusinessinformationLocationsAttributesGetGoogleUpdated` - Gets the Google-updated version of the specified location.
* `MybusinessbusinessinformationLocationsClearLocationAssociation` - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* `MybusinessbusinessinformationLocationsDelete` - Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
* `MybusinessbusinessinformationLocationsGetAttributes` - Looks up all the attributes set for a given location.
* `MybusinessbusinessinformationLocationsUpdateAttributes` - Update attributes for a given location.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
