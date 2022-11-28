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
import { MybusinessbusinessinformationAccountsLocationsCreateRequest, MybusinessbusinessinformationAccountsLocationsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: MybusinessbusinessinformationAccountsLocationsCreateRequest = {
  pathParams: {
    parent: "libero",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "odit",
    alt: "proto",
    callback: "eum",
    fields: "sit",
    key: "tenetur",
    oauthToken: "voluptatem",
    prettyPrint: true,
    quotaUser: "est",
    requestId: "explicabo",
    uploadType: "quia",
    uploadProtocol: "illum",
    validateOnly: true,
  },
  request: {
    adWordsLocationExtensions: {
      adPhone: "illum",
    },
    categories: {
      additionalCategories: [
        {
          name: "perspiciatis",
        },
      ],
      primaryCategory: {
        name: "et",
      },
    },
    labels: [
      "quo",
      "dolore",
      "eum",
    ],
    languageCode: "non",
    latlng: {
      latitude: 69.099998,
      longitude: 82.099998,
    },
    moreHours: [
      {
        hoursTypeId: "mollitia",
        periods: [
          {
            closeDay: "THURSDAY",
            closeTime: {
              hours: 362439674537433464,
              minutes: 5592977181999155684,
              nanos: 4546169383228116168,
              seconds: 5088318187350289063,
            },
            openDay: "SATURDAY",
            openTime: {
              hours: 2418076152276229764,
              minutes: 7762466640732174122,
              nanos: 6941231064367346566,
              seconds: 197936525305537892,
            },
          },
          {
            closeDay: "WEDNESDAY",
            closeTime: {
              hours: 4650935838865454153,
              minutes: 1188395243519367524,
              nanos: 4712713175942510196,
              seconds: 7208814649896680255,
            },
            openDay: "WEDNESDAY",
            openTime: {
              hours: 5735307111172916220,
              minutes: 8768700199555435333,
              nanos: 198022425704256756,
              seconds: 7460475701189497067,
            },
          },
          {
            closeDay: "SUNDAY",
            closeTime: {
              hours: 224697432882219189,
              minutes: 7236311762337614376,
              nanos: 924164461781123107,
              seconds: 6728281231694557160,
            },
            openDay: "SUNDAY",
            openTime: {
              hours: 7699856789253341874,
              minutes: 2307016911102313691,
              nanos: 8070841639742139712,
              seconds: 8249940597302262118,
            },
          },
        ],
      },
      {
        hoursTypeId: "eius",
        periods: [
          {
            closeDay: "WEDNESDAY",
            closeTime: {
              hours: 5853833349788936843,
              minutes: 1021614946430302668,
              nanos: 6244958831658543478,
              seconds: 7644969593495325328,
            },
            openDay: "THURSDAY",
            openTime: {
              hours: 6791288773140694802,
              minutes: 6592594650285513025,
              nanos: 2795860774976171589,
              seconds: 8188544995744384376,
            },
          },
          {
            closeDay: "TUESDAY",
            closeTime: {
              hours: 7499320018626275312,
              minutes: 8858932334642543268,
              nanos: 9204438152282402779,
              seconds: 2241765145493959895,
            },
            openDay: "WEDNESDAY",
            openTime: {
              hours: 3712396041295168985,
              minutes: 4058216714084853740,
              nanos: 326066148651249971,
              seconds: 8290724554251344738,
            },
          },
          {
            closeDay: "TUESDAY",
            closeTime: {
              hours: 4270553227883750691,
              minutes: 5633296492787808627,
              nanos: 8114418921173693040,
              seconds: 2945966162751075419,
            },
            openDay: "DAY_OF_WEEK_UNSPECIFIED",
            openTime: {
              hours: 6636518955529658358,
              minutes: 8185989858534526663,
              nanos: 157684873306664347,
              seconds: 6616319257068410543,
            },
          },
        ],
      },
    ],
    name: "modi",
    openInfo: {
      openingDate: {
        day: 3781140949000493454,
        month: 4306500671919340872,
        year: 3941949280417042457,
      },
      status: "CLOSED_TEMPORARILY",
    },
    phoneNumbers: {
      additionalPhones: [
        "voluptatem",
        "voluptatem",
        "temporibus",
      ],
      primaryPhone: "quam",
    },
    profile: {
      description: "necessitatibus",
    },
    regularHours: {
      periods: [
        {
          closeDay: "SUNDAY",
          closeTime: {
            hours: 812733258384458076,
            minutes: 5388553801043562202,
            nanos: 4213281503838971721,
            seconds: 4238994572124348340,
          },
          openDay: "DAY_OF_WEEK_UNSPECIFIED",
          openTime: {
            hours: 2077172109625829910,
            minutes: 5006152875917678633,
            nanos: 3435326265394591343,
            seconds: 3032618834197031037,
          },
        },
        {
          closeDay: "TUESDAY",
          closeTime: {
            hours: 2305083587581389538,
            minutes: 3083549253498686385,
            nanos: 4582314473479600039,
            seconds: 6247756121453465261,
          },
          openDay: "MONDAY",
          openTime: {
            hours: 7261596107366123483,
            minutes: 4917180700220100766,
            nanos: 6449885474933651091,
            seconds: 408755297423103518,
          },
        },
      ],
    },
    relationshipData: {
      childrenLocations: [
        {
          placeId: "vitae",
          relationType: "INDEPENDENT_ESTABLISHMENT_IN",
        },
      ],
      parentChain: "fugit",
      parentLocation: {
        placeId: "amet",
        relationType: "INDEPENDENT_ESTABLISHMENT_IN",
      },
    },
    serviceArea: {
      businessType: "BUSINESS_TYPE_UNSPECIFIED",
      places: {
        placeInfos: [
          {
            placeId: "doloremque",
            placeName: "delectus",
          },
          {
            placeId: "aspernatur",
            placeName: "exercitationem",
          },
        ],
      },
      regionCode: "qui",
    },
    serviceItems: [
      {
        freeFormServiceItem: {
          category: "aliquid",
          label: {
            description: "rerum",
            displayName: "ab",
            languageCode: "et",
          },
        },
        price: {
          currencyCode: "omnis",
          nanos: 4929758119589791402,
          units: "illum",
        },
        structuredServiceItem: {
          description: "necessitatibus",
          serviceTypeId: "labore",
        },
      },
    ],
    specialHours: {
      specialHourPeriods: [
        {
          closeTime: {
            hours: 3222008006196313405,
            minutes: 8141538113356155902,
            nanos: 2083398587625733217,
            seconds: 1920556121540402017,
          },
          closed: false,
          endDate: {
            day: 343166000667295263,
            month: 7015877390982513274,
            year: 1434854330249448151,
          },
          openTime: {
            hours: 9042610006426685816,
            minutes: 1729556463384848332,
            nanos: 1790269723380542375,
            seconds: 7955354439162347273,
          },
          startDate: {
            day: 8257459218013048958,
            month: 1511305980227211375,
            year: 8980409353330380210,
          },
        },
      ],
    },
    storeCode: "rerum",
    storefrontAddress: {
      addressLines: [
        "vitae",
        "fugiat",
      ],
      administrativeArea: "rem",
      languageCode: "rerum",
      locality: "atque",
      organization: "ullam",
      postalCode: "vero",
      recipients: [
        "aspernatur",
      ],
      regionCode: "eius",
      revision: 4153565705517318178,
      sortingCode: "nihil",
      sublocality: "quos",
    },
    title: "facilis",
    websiteUri: "debitis",
  },
};

sdk.accounts.mybusinessbusinessinformationAccountsLocationsCreate(req).then((res: MybusinessbusinessinformationAccountsLocationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `mybusinessbusinessinformationAccountsLocationsCreate` - Creates a new Location that will be owned by the logged in user.
* `mybusinessbusinessinformationAccountsLocationsList` - Lists the locations for the specified account.

### attributes

* `mybusinessbusinessinformationAttributesList` - Returns the list of attributes that would be available for a location with the given primary category and country.

### categories

* `mybusinessbusinessinformationCategoriesBatchGet` - Returns a list of business categories for the provided language and GConcept ids.
* `mybusinessbusinessinformationCategoriesList` - Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### chains

* `mybusinessbusinessinformationChainsSearch` - Searches the chain based on chain name.

### googleLocations

* `mybusinessbusinessinformationGoogleLocationsSearch` - Search all of the possible locations that are a match to the specified request.

### locations

* `mybusinessbusinessinformationLocationsAssociate` - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.
* `mybusinessbusinessinformationLocationsAttributesGetGoogleUpdated` - Gets the Google-updated version of the specified location.
* `mybusinessbusinessinformationLocationsClearLocationAssociation` - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* `mybusinessbusinessinformationLocationsDelete` - Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
* `mybusinessbusinessinformationLocationsGetAttributes` - Looks up all the attributes set for a given location.
* `mybusinessbusinessinformationLocationsUpdateAttributes` - Update attributes for a given location.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
