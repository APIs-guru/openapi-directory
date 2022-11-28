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
    
    req := operations.CreateDomesticPaymentConsentsRequest{
        Security: operations.CreateDomesticPaymentConsentsSecurity{
            TppoAuth2Security: shared.SchemeTppoAuth2Security{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Headers: operations.CreateDomesticPaymentConsentsHeaders{
            Authorization: "eligendi",
            XCustomerUserAgent: "provident",
            XFapiAuthDate: "qui",
            XFapiCustomerIPAddress: "consequatur",
            XFapiInteractionID: "molestiae",
            XIdempotencyKey: "eaque",
            XJwsSignature: "accusamus",
        },
        Request: operations.CreateDomesticPaymentConsentsRequests{
            ApplicationJosePlusJwe: []byte("nihil"),
            ObWriteDomesticConsent4: &shared.ObWriteDomesticConsent4{
                Data: shared.ObWriteDomesticConsent4Data{
                    Authorisation: &shared.ObWriteDomesticConsent4DataAuthorisation{
                        AuthorisationType: "Any",
                        CompletionDateTime: "1979-04-22T03:58:28Z",
                    },
                    Initiation: shared.ObWriteDomesticConsent4DataInitiation{
                        CreditorAccount: shared.ObWriteDomesticConsent4DataInitiationCreditorAccount{
                            Identification: "facere",
                            Name: "nesciunt",
                            SchemeName: "ullam",
                            SecondaryIdentification: "placeat",
                        },
                        CreditorPostalAddress: &shared.ObPostalAddress6{
                            AddressLine: []string{
                                "sed",
                                "consectetur",
                                "corrupti",
                            },
                            AddressType: "Residential",
                            BuildingNumber: "exercitationem",
                            Country: "assumenda",
                            CountrySubDivision: "vel",
                            Department: "hic",
                            PostCode: "ullam",
                            StreetName: "omnis",
                            SubDepartment: "delectus",
                            TownName: "tempora",
                        },
                        DebtorAccount: &shared.ObWriteDomesticConsent4DataInitiationDebtorAccount{
                            Identification: "eveniet",
                            Name: "consequatur",
                            SchemeName: "qui",
                            SecondaryIdentification: "nihil",
                        },
                        EndToEndIdentification: "rerum",
                        InstructedAmount: shared.ObWriteDomesticConsent4DataInitiationInstructedAmount{
                            Amount: "minima",
                            Currency: "qui",
                        },
                        InstructionIdentification: "quis",
                        LocalInstrument: "ea",
                        RemittanceInformation: &shared.ObWriteDomesticConsent4DataInitiationRemittanceInformation{
                            Reference: "expedita",
                            Unstructured: "rerum",
                        },
                        SupplementaryData: map[string]interface{}{
                            "quidem": "vel",
                            "laudantium": "officiis",
                        },
                    },
                    ReadRefundAccount: "Yes",
                    ScaSupportData: &shared.ObscaSupportData1{
                        AppliedAuthenticationApproach: "CA",
                        ReferencePaymentOrderID: "dolores",
                        RequestedScaExemptionType: "Kiosk",
                    },
                },
                Risk: shared.ObRisk1{
                    DeliveryAddress: &shared.ObRisk1DeliveryAddress{
                        AddressLine: []string{
                            "a",
                            "voluptas",
                            "omnis",
                        },
                        BuildingNumber: "laudantium",
                        Country: "assumenda",
                        CountrySubDivision: "dicta",
                        PostCode: "omnis",
                        StreetName: "nisi",
                        TownName: "voluptatem",
                    },
                    MerchantCategoryCode: "aspernatur",
                    MerchantCustomerIdentification: "iusto",
                    PaymentContextCode: "PartyToParty",
                },
            },
            ObWriteDomesticConsent5: &shared.ObWriteDomesticConsent4{
                Data: shared.ObWriteDomesticConsent4Data{
                    Authorisation: &shared.ObWriteDomesticConsent4DataAuthorisation{
                        AuthorisationType: "Single",
                        CompletionDateTime: "1991-02-20T04:42:38Z",
                    },
                    Initiation: shared.ObWriteDomesticConsent4DataInitiation{
                        CreditorAccount: shared.ObWriteDomesticConsent4DataInitiationCreditorAccount{
                            Identification: "autem",
                            Name: "necessitatibus",
                            SchemeName: "sunt",
                            SecondaryIdentification: "dolor",
                        },
                        CreditorPostalAddress: &shared.ObPostalAddress6{
                            AddressLine: []string{
                                "et",
                                "voluptatum",
                                "quia",
                            },
                            AddressType: "Statement",
                            BuildingNumber: "quia",
                            Country: "aut",
                            CountrySubDivision: "cupiditate",
                            Department: "dolores",
                            PostCode: "amet",
                            StreetName: "quia",
                            SubDepartment: "beatae",
                            TownName: "quidem",
                        },
                        DebtorAccount: &shared.ObWriteDomesticConsent4DataInitiationDebtorAccount{
                            Identification: "id",
                            Name: "ratione",
                            SchemeName: "inventore",
                            SecondaryIdentification: "ratione",
                        },
                        EndToEndIdentification: "consequuntur",
                        InstructedAmount: shared.ObWriteDomesticConsent4DataInitiationInstructedAmount{
                            Amount: "sequi",
                            Currency: "velit",
                        },
                        InstructionIdentification: "autem",
                        LocalInstrument: "est",
                        RemittanceInformation: &shared.ObWriteDomesticConsent4DataInitiationRemittanceInformation{
                            Reference: "ullam",
                            Unstructured: "enim",
                        },
                        SupplementaryData: map[string]interface{}{
                            "quia": "harum",
                            "dolores": "corporis",
                            "sit": "saepe",
                        },
                    },
                    ReadRefundAccount: "Yes",
                    ScaSupportData: &shared.ObscaSupportData1{
                        AppliedAuthenticationApproach: "CA",
                        ReferencePaymentOrderID: "aut",
                        RequestedScaExemptionType: "Kiosk",
                    },
                },
                Risk: shared.ObRisk1{
                    DeliveryAddress: &shared.ObRisk1DeliveryAddress{
                        AddressLine: []string{
                            "omnis",
                            "expedita",
                            "non",
                        },
                        BuildingNumber: "expedita",
                        Country: "quae",
                        CountrySubDivision: "assumenda",
                        PostCode: "asperiores",
                        StreetName: "ut",
                        TownName: "nesciunt",
                    },
                    MerchantCategoryCode: "libero",
                    MerchantCustomerIdentification: "voluptatibus",
                    PaymentContextCode: "Other",
                },
            },
        },
    }
    
    res, err := s.Sdk.CreateDomesticPaymentConsents(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateDomesticPaymentConsents` - Create Domestic Payment Consents
* `CreateDomesticPayments` - Create Domestic Payments
* `CreateDomesticScheduledPaymentConsents` - Create Domestic Scheduled Payment Consents
* `CreateDomesticScheduledPayments` - Create Domestic Scheduled Payments
* `CreateDomesticStandingOrderConsents` - Create Domestic Standing Order Consents
* `CreateDomesticStandingOrders` - Create Domestic Standing Orders
* `CreateFilePaymentConsents` - Create File Payment Consents
* `CreateFilePaymentConsentsConsentIDFile` - Create File Payment Consents
* `CreateFilePayments` - Create File Payments
* `CreateInternationalPaymentConsents` - Create International Payment Consents
* `CreateInternationalPayments` - Create International Payments
* `CreateInternationalScheduledPaymentConsents` - Create International Scheduled Payment Consents
* `CreateInternationalScheduledPayments` - Create International Scheduled Payments
* `CreateInternationalStandingOrderConsents` - Create International Standing Order Consents
* `CreateInternationalStandingOrders` - Create International Standing Orders
* `GetDomesticPaymentConsentsConsentID` - Get Domestic Payment Consents
* `GetDomesticPaymentConsentsConsentIDFundsConfirmation` - Get Domestic Payment Consents Funds Confirmation
* `GetDomesticPaymentsDomesticPaymentID` - Get Domestic Payments
* `GetDomesticPaymentsDomesticPaymentIDPaymentDetails` - Get Payment Details
* `GetDomesticScheduledPaymentConsentsConsentID` - Get Domestic Scheduled Payment Consents
* `GetDomesticScheduledPaymentsDomesticScheduledPaymentID` - Get Domestic Scheduled Payments
* `GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetails` - Get Payment Details
* `GetDomesticStandingOrderConsentsConsentID` - Get Domestic Standing Order Consents
* `GetDomesticStandingOrdersDomesticStandingOrderID` - Get Domestic Standing Orders
* `GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetails` - Get Payment Details
* `GetFilePaymentConsentsConsentID` - Get File Payment Consents
* `GetFilePaymentConsentsConsentIDFile` - Get File Payment Consents
* `GetFilePaymentsFilePaymentID` - Get File Payments
* `GetFilePaymentsFilePaymentIDPaymentDetails` - Get Payment Details
* `GetFilePaymentsFilePaymentIDReportFile` - Get File Payments
* `GetInternationalPaymentConsentsConsentID` - Get International Payment Consents
* `GetInternationalPaymentConsentsConsentIDFundsConfirmation` - Get International Payment Consents Funds Confirmation
* `GetInternationalPaymentsInternationalPaymentID` - Get International Payments
* `GetInternationalPaymentsInternationalPaymentIDPaymentDetails` - Get Payment Details
* `GetInternationalScheduledPaymentConsentsConsentID` - Get International Scheduled Payment Consents
* `GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmation` - Get International Scheduled Payment Consents Funds Confirmation
* `GetInternationalScheduledPaymentsInternationalScheduledPaymentID` - Get International Scheduled Payments
* `GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetails` - Get Payment Details
* `GetInternationalStandingOrderConsentsConsentID` - Get International Standing Order Consents
* `GetInternationalStandingOrdersInternationalStandingOrderPaymentID` - Get International Standing Orders
* `GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetails` - Get Payment Details

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
