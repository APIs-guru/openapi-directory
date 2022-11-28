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
import { CreateConsentRequest, CreateConsentResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    bearerAuthOAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: CreateConsentRequest = {
  security: {
    bearerAuthOAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  headers: {
    digest: "eos",
    psuAccept: "quia",
    psuAcceptCharset: "molestias",
    psuAcceptEncoding: "qui",
    psuAcceptLanguage: "dolore",
    psuCorporateId: "explicabo",
    psuCorporateIdType: "ut",
    psuDeviceId: "dignissimos",
    psuGeoLocation: "aut",
    psuHttpMethod: "GET",
    psuId: "doloremque",
    psuIdType: "numquam",
    psuIpAddress: "suscipit",
    psuIpPort: "qui",
    psuUserAgent: "iure",
    signature: "quae",
    tppBrandLoggingInformation: "dolore",
    tppExplicitAuthorisationPreferred: false,
    tppNokRedirectUri: "consequatur",
    tppNotificationContentPreferred: "quis",
    tppNotificationUri: "voluptatum",
    tppRedirectPreferred: true,
    tppRedirectUri: "sint",
    tppSignatureCertificate: "alias",
    xRequestId: "porro",
  },
  request: {
    access: {
      accounts: [
        {
          cashAccountType: "nobis",
          currency: "sunt",
          iban: "quisquam",
          otherAccountIdentification: "blanditiis",
        },
        {
          cashAccountType: "voluptas",
          currency: "modi",
          iban: "aut",
          otherAccountIdentification: "dolor",
        },
      ],
      additionalInformation: {
        ownerName: [
          {
            cashAccountType: "molestias",
            currency: "debitis",
            iban: "ad",
            otherAccountIdentification: "consequatur",
          },
          {
            cashAccountType: "in",
            currency: "tenetur",
            iban: "et",
            otherAccountIdentification: "sed",
          },
          {
            cashAccountType: "eius",
            currency: "et",
            iban: "mollitia",
            otherAccountIdentification: "ea",
          },
        ],
        trustedBeneficiaries: [
          {
            cashAccountType: "reiciendis",
            currency: "eos",
            iban: "assumenda",
            otherAccountIdentification: "vel",
          },
          {
            cashAccountType: "at",
            currency: "ea",
            iban: "inventore",
            otherAccountIdentification: "veritatis",
          },
          {
            cashAccountType: "inventore",
            currency: "in",
            iban: "earum",
            otherAccountIdentification: "voluptatum",
          },
        ],
      },
      allPsd2: "allAccounts",
      availableAccounts: "allAccounts",
      availableAccountsWithBalance: "allAccountsWithOwnerName",
      balances: [
        {
          cashAccountType: "vero",
          currency: "aut",
          iban: "laboriosam",
          otherAccountIdentification: "cumque",
        },
      ],
      restrictedTo: [
        "eos",
      ],
      transactions: [
        {
          cashAccountType: "dicta",
          currency: "fugiat",
          iban: "rerum",
          otherAccountIdentification: "animi",
        },
        {
          cashAccountType: "est",
          currency: "excepturi",
          iban: "consectetur",
          otherAccountIdentification: "et",
        },
        {
          cashAccountType: "ut",
          currency: "non",
          iban: "aut",
          otherAccountIdentification: "accusantium",
        },
      ],
    },
    combinedServiceIndicator: true,
    frequencyPerDay: 7555813660748480679,
    recurringIndicator: false,
    validUntil: "1973-10-13",
  },
};

sdk.accountInformationServiceAis.createConsent(req).then((res: CreateConsentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Account Information Service (AIS)

* `createConsent` - Create consent
* `deleteConsent` - Delete Consent
* `getAccountList` - Read account list
* `getBalances` - Read balance
* `getConsentAuthorisation` - Get consent authorisation sub-resources request
* `getConsentInformation` - Get consent request
* `getConsentScaStatus` - Read the SCA status of the consent authorisation
* `getConsentStatus` - Consent status request
* `getTransactionDetails` - Read transaction details
* `getTransactionList` - Read transaction list of an account
* `readAccountDetails` - Read account details
* `startConsentAuthorisation` - Start the authorisation process for a consent
* `updateConsentsPsuData` - Update PSU Data for consents

### Common Services

* `deleteSigningBasket` - Delete the signing basket
* `getConsentScaStatus` - Read the SCA status of the consent authorisation
* `getPaymentCancellationScaStatus` - Read the SCA status of the payment cancellation's authorisation
* `getPaymentInitiationAuthorisation` - Get payment initiation authorisation sub-resources request
* `getPaymentInitiationScaStatus` - Read the SCA status of the payment authorisation
* `getSigningBasketAuthorisation` - Get signing basket authorisation sub-resources request
* `getSigningBasketScaStatus` - Read the SCA status of the signing basket authorisation
* `getSigningBasketStatus` - Read the status of the signing basket
* `startConsentAuthorisation` - Start the authorisation process for a consent
* `startPaymentAuthorisation` - Start the authorisation process for a payment initiation
* `startPaymentInitiationCancellationAuthorisation` - Start the authorisation process for the cancellation of the addressed payment
* `startSigningBasketAuthorisation` - Start the authorisation process for a signing basket
* `updateConsentsPsuData` - Update PSU Data for consents
* `updatePaymentCancellationPsuData` - Update PSU data for payment initiation cancellation
* `updatePaymentPsuData` - Update PSU data for payment initiation
* `updateSigningBasketPsuData` - Update PSU data for signing basket

### Confirmation of Funds Service (PIIS)

* `checkAvailabilityOfFunds` - Confirmation of funds request

### Payment Initiation Service (PIS)

* `cancelPayment` - Payment cancellation request
* `getPaymentCancellationScaStatus` - Read the SCA status of the payment cancellation's authorisation
* `getPaymentInformation` - Get payment information
* `getPaymentInitiationAuthorisation` - Get payment initiation authorisation sub-resources request
* `getPaymentInitiationCancellationAuthorisationInformation` - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
* `getPaymentInitiationScaStatus` - Read the SCA status of the payment authorisation
* `getPaymentInitiationStatus` - Payment initiation status request
* `initiatePayment` - Payment initiation request
* `startPaymentAuthorisation` - Start the authorisation process for a payment initiation
* `startPaymentInitiationCancellationAuthorisation` - Start the authorisation process for the cancellation of the addressed payment
* `updatePaymentCancellationPsuData` - Update PSU data for payment initiation cancellation
* `updatePaymentPsuData` - Update PSU data for payment initiation

### Signing Baskets Service (SBS)

* `createSigningBasket` - Create a signing basket resource
* `deleteSigningBasket` - Delete the signing basket
* `getSigningBasket` - Returns the content of an signing basket object
* `getSigningBasketAuthorisation` - Get signing basket authorisation sub-resources request
* `getSigningBasketScaStatus` - Read the SCA status of the signing basket authorisation
* `getSigningBasketStatus` - Read the status of the signing basket
* `startSigningBasketAuthorisation` - Start the authorisation process for a signing basket
* `updateSigningBasketPsuData` - Update PSU data for signing basket

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
