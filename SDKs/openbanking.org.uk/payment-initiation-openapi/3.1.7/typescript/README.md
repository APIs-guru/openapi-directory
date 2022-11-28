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
import { CreateDomesticPaymentConsentsRequest, CreateDomesticPaymentConsentsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateDomesticPaymentConsentsRequest = {
  security: {
    tppoAuth2Security: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  headers: {
    authorization: "eligendi",
    xCustomerUserAgent: "provident",
    xFapiAuthDate: "qui",
    xFapiCustomerIpAddress: "consequatur",
    xFapiInteractionId: "molestiae",
    xIdempotencyKey: "eaque",
    xJwsSignature: "accusamus",
  },
  request: {
    applicationJosePlusJwe: "nihil".encode(),
    obWriteDomesticConsent4: {
      data: {
        authorisation: {
          authorisationType: "Any",
          completionDateTime: "1979-04-22T07:05:29Z",
        },
        initiation: {
          creditorAccount: {
            identification: "facere",
            name: "nesciunt",
            schemeName: "ullam",
            secondaryIdentification: "placeat",
          },
          creditorPostalAddress: {
            addressLine: [
              "sed",
              "consectetur",
              "corrupti",
            ],
            addressType: "Residential",
            buildingNumber: "exercitationem",
            country: "assumenda",
            countrySubDivision: "vel",
            department: "hic",
            postCode: "ullam",
            streetName: "omnis",
            subDepartment: "delectus",
            townName: "tempora",
          },
          debtorAccount: {
            identification: "eveniet",
            name: "consequatur",
            schemeName: "qui",
            secondaryIdentification: "nihil",
          },
          endToEndIdentification: "rerum",
          instructedAmount: {
            amount: "minima",
            currency: "qui",
          },
          instructionIdentification: "quis",
          localInstrument: "ea",
          remittanceInformation: {
            reference: "expedita",
            unstructured: "rerum",
          },
          supplementaryData: {
            "quidem": "vel",
            "laudantium": "officiis",
          },
        },
        readRefundAccount: "Yes",
        scaSupportData: {
          appliedAuthenticationApproach: "CA",
          referencePaymentOrderId: "dolores",
          requestedScaExemptionType: "Kiosk",
        },
      },
      risk: {
        deliveryAddress: {
          addressLine: [
            "a",
            "voluptas",
            "omnis",
          ],
          buildingNumber: "laudantium",
          country: "assumenda",
          countrySubDivision: "dicta",
          postCode: "omnis",
          streetName: "nisi",
          townName: "voluptatem",
        },
        merchantCategoryCode: "aspernatur",
        merchantCustomerIdentification: "iusto",
        paymentContextCode: "PartyToParty",
      },
    },
    obWriteDomesticConsent5: {
      data: {
        authorisation: {
          authorisationType: "Single",
          completionDateTime: "1991-02-20T07:49:39Z",
        },
        initiation: {
          creditorAccount: {
            identification: "autem",
            name: "necessitatibus",
            schemeName: "sunt",
            secondaryIdentification: "dolor",
          },
          creditorPostalAddress: {
            addressLine: [
              "et",
              "voluptatum",
              "quia",
            ],
            addressType: "Statement",
            buildingNumber: "quia",
            country: "aut",
            countrySubDivision: "cupiditate",
            department: "dolores",
            postCode: "amet",
            streetName: "quia",
            subDepartment: "beatae",
            townName: "quidem",
          },
          debtorAccount: {
            identification: "id",
            name: "ratione",
            schemeName: "inventore",
            secondaryIdentification: "ratione",
          },
          endToEndIdentification: "consequuntur",
          instructedAmount: {
            amount: "sequi",
            currency: "velit",
          },
          instructionIdentification: "autem",
          localInstrument: "est",
          remittanceInformation: {
            reference: "ullam",
            unstructured: "enim",
          },
          supplementaryData: {
            "quia": "harum",
            "dolores": "corporis",
            "sit": "saepe",
          },
        },
        readRefundAccount: "Yes",
        scaSupportData: {
          appliedAuthenticationApproach: "CA",
          referencePaymentOrderId: "aut",
          requestedScaExemptionType: "Kiosk",
        },
      },
      risk: {
        deliveryAddress: {
          addressLine: [
            "omnis",
            "expedita",
            "non",
          ],
          buildingNumber: "expedita",
          country: "quae",
          countrySubDivision: "assumenda",
          postCode: "asperiores",
          streetName: "ut",
          townName: "nesciunt",
        },
        merchantCategoryCode: "libero",
        merchantCustomerIdentification: "voluptatibus",
        paymentContextCode: "Other",
      },
    },
  },
};

sdk.sdk.createDomesticPaymentConsents(req).then((res: CreateDomesticPaymentConsentsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createDomesticPaymentConsents` - Create Domestic Payment Consents
* `createDomesticPayments` - Create Domestic Payments
* `createDomesticScheduledPaymentConsents` - Create Domestic Scheduled Payment Consents
* `createDomesticScheduledPayments` - Create Domestic Scheduled Payments
* `createDomesticStandingOrderConsents` - Create Domestic Standing Order Consents
* `createDomesticStandingOrders` - Create Domestic Standing Orders
* `createFilePaymentConsents` - Create File Payment Consents
* `createFilePaymentConsentsConsentIdFile` - Create File Payment Consents
* `createFilePayments` - Create File Payments
* `createInternationalPaymentConsents` - Create International Payment Consents
* `createInternationalPayments` - Create International Payments
* `createInternationalScheduledPaymentConsents` - Create International Scheduled Payment Consents
* `createInternationalScheduledPayments` - Create International Scheduled Payments
* `createInternationalStandingOrderConsents` - Create International Standing Order Consents
* `createInternationalStandingOrders` - Create International Standing Orders
* `getDomesticPaymentConsentsConsentId` - Get Domestic Payment Consents
* `getDomesticPaymentConsentsConsentIdFundsConfirmation` - Get Domestic Payment Consents Funds Confirmation
* `getDomesticPaymentsDomesticPaymentId` - Get Domestic Payments
* `getDomesticPaymentsDomesticPaymentIdPaymentDetails` - Get Payment Details
* `getDomesticScheduledPaymentConsentsConsentId` - Get Domestic Scheduled Payment Consents
* `getDomesticScheduledPaymentsDomesticScheduledPaymentId` - Get Domestic Scheduled Payments
* `getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails` - Get Payment Details
* `getDomesticStandingOrderConsentsConsentId` - Get Domestic Standing Order Consents
* `getDomesticStandingOrdersDomesticStandingOrderId` - Get Domestic Standing Orders
* `getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails` - Get Payment Details
* `getFilePaymentConsentsConsentId` - Get File Payment Consents
* `getFilePaymentConsentsConsentIdFile` - Get File Payment Consents
* `getFilePaymentsFilePaymentId` - Get File Payments
* `getFilePaymentsFilePaymentIdPaymentDetails` - Get Payment Details
* `getFilePaymentsFilePaymentIdReportFile` - Get File Payments
* `getInternationalPaymentConsentsConsentId` - Get International Payment Consents
* `getInternationalPaymentConsentsConsentIdFundsConfirmation` - Get International Payment Consents Funds Confirmation
* `getInternationalPaymentsInternationalPaymentId` - Get International Payments
* `getInternationalPaymentsInternationalPaymentIdPaymentDetails` - Get Payment Details
* `getInternationalScheduledPaymentConsentsConsentId` - Get International Scheduled Payment Consents
* `getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation` - Get International Scheduled Payment Consents Funds Confirmation
* `getInternationalScheduledPaymentsInternationalScheduledPaymentId` - Get International Scheduled Payments
* `getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails` - Get Payment Details
* `getInternationalStandingOrderConsentsConsentId` - Get International Standing Order Consents
* `getInternationalStandingOrdersInternationalStandingOrderPaymentId` - Get International Standing Orders
* `getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails` - Get Payment Details

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
