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
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                BearerAuthOAuth: &shared.SchemeBearerAuthOAuth{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateConsentRequest{
        Security: operations.CreateConsentSecurity{
            BearerAuthOAuth: &shared.SchemeBearerAuthOAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        Headers: operations.CreateConsentHeaders{
            Digest: "eos",
            PsuAccept: "quia",
            PsuAcceptCharset: "molestias",
            PsuAcceptEncoding: "qui",
            PsuAcceptLanguage: "dolore",
            PsuCorporateID: "explicabo",
            PsuCorporateIDType: "ut",
            PsuDeviceID: "dignissimos",
            PsuGeoLocation: "aut",
            PsuHTTPMethod: "GET",
            PsuID: "doloremque",
            PsuIDType: "numquam",
            PsuIPAddress: "suscipit",
            PsuIPPort: "qui",
            PsuUserAgent: "iure",
            Signature: "quae",
            TppBrandLoggingInformation: "dolore",
            TppExplicitAuthorisationPreferred: false,
            TppNokRedirectURI: "consequatur",
            TppNotificationContentPreferred: "quis",
            TppNotificationURI: "voluptatum",
            TppRedirectPreferred: true,
            TppRedirectURI: "sint",
            TppSignatureCertificate: "alias",
            XRequestID: "porro",
        },
        Request: &shared.Consents{
            Access: shared.AccountAccess{
                Accounts: []shared.AccountReference16Ch{
                    shared.AccountReference16Ch{
                        CashAccountType: "nobis",
                        Currency: "sunt",
                        Iban: "quisquam",
                        OtherAccountIdentification: "blanditiis",
                    },
                    shared.AccountReference16Ch{
                        CashAccountType: "voluptas",
                        Currency: "modi",
                        Iban: "aut",
                        OtherAccountIdentification: "dolor",
                    },
                },
                AdditionalInformation: &shared.AdditionalInformationAccess{
                    OwnerName: []shared.AccountReference16Ch{
                        shared.AccountReference16Ch{
                            CashAccountType: "molestias",
                            Currency: "debitis",
                            Iban: "ad",
                            OtherAccountIdentification: "consequatur",
                        },
                        shared.AccountReference16Ch{
                            CashAccountType: "in",
                            Currency: "tenetur",
                            Iban: "et",
                            OtherAccountIdentification: "sed",
                        },
                        shared.AccountReference16Ch{
                            CashAccountType: "eius",
                            Currency: "et",
                            Iban: "mollitia",
                            OtherAccountIdentification: "ea",
                        },
                    },
                    TrustedBeneficiaries: []shared.AccountReference16Ch{
                        shared.AccountReference16Ch{
                            CashAccountType: "reiciendis",
                            Currency: "eos",
                            Iban: "assumenda",
                            OtherAccountIdentification: "vel",
                        },
                        shared.AccountReference16Ch{
                            CashAccountType: "at",
                            Currency: "ea",
                            Iban: "inventore",
                            OtherAccountIdentification: "veritatis",
                        },
                        shared.AccountReference16Ch{
                            CashAccountType: "inventore",
                            Currency: "in",
                            Iban: "earum",
                            OtherAccountIdentification: "voluptatum",
                        },
                    },
                },
                AllPsd2: "allAccounts",
                AvailableAccounts: "allAccounts",
                AvailableAccountsWithBalance: "allAccountsWithOwnerName",
                Balances: []shared.AccountReference16Ch{
                    shared.AccountReference16Ch{
                        CashAccountType: "vero",
                        Currency: "aut",
                        Iban: "laboriosam",
                        OtherAccountIdentification: "cumque",
                    },
                },
                RestrictedTo: []string{
                    "eos",
                },
                Transactions: []shared.AccountReference16Ch{
                    shared.AccountReference16Ch{
                        CashAccountType: "dicta",
                        Currency: "fugiat",
                        Iban: "rerum",
                        OtherAccountIdentification: "animi",
                    },
                    shared.AccountReference16Ch{
                        CashAccountType: "est",
                        Currency: "excepturi",
                        Iban: "consectetur",
                        OtherAccountIdentification: "et",
                    },
                    shared.AccountReference16Ch{
                        CashAccountType: "ut",
                        Currency: "non",
                        Iban: "aut",
                        OtherAccountIdentification: "accusantium",
                    },
                },
            },
            CombinedServiceIndicator: true,
            FrequencyPerDay: 7555813660748480679,
            RecurringIndicator: false,
            ValidUntil: "1973-10-13",
        },
    }
    
    res, err := s.AccountInformationServiceAis.CreateConsent(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConsentsResponse201 != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Account Information Service (AIS)

* `CreateConsent` - Create consent
* `DeleteConsent` - Delete Consent
* `GetAccountList` - Read account list
* `GetBalances` - Read balance
* `GetConsentAuthorisation` - Get consent authorisation sub-resources request
* `GetConsentInformation` - Get consent request
* `GetConsentScaStatus` - Read the SCA status of the consent authorisation
* `GetConsentStatus` - Consent status request
* `GetTransactionDetails` - Read transaction details
* `GetTransactionList` - Read transaction list of an account
* `ReadAccountDetails` - Read account details
* `StartConsentAuthorisation` - Start the authorisation process for a consent
* `UpdateConsentsPsuData` - Update PSU Data for consents

### Common Services

* `DeleteSigningBasket` - Delete the signing basket
* `GetConsentScaStatus` - Read the SCA status of the consent authorisation
* `GetPaymentCancellationScaStatus` - Read the SCA status of the payment cancellation's authorisation
* `GetPaymentInitiationAuthorisation` - Get payment initiation authorisation sub-resources request
* `GetPaymentInitiationScaStatus` - Read the SCA status of the payment authorisation
* `GetSigningBasketAuthorisation` - Get signing basket authorisation sub-resources request
* `GetSigningBasketScaStatus` - Read the SCA status of the signing basket authorisation
* `GetSigningBasketStatus` - Read the status of the signing basket
* `StartConsentAuthorisation` - Start the authorisation process for a consent
* `StartPaymentAuthorisation` - Start the authorisation process for a payment initiation
* `StartPaymentInitiationCancellationAuthorisation` - Start the authorisation process for the cancellation of the addressed payment
* `StartSigningBasketAuthorisation` - Start the authorisation process for a signing basket
* `UpdateConsentsPsuData` - Update PSU Data for consents
* `UpdatePaymentCancellationPsuData` - Update PSU data for payment initiation cancellation
* `UpdatePaymentPsuData` - Update PSU data for payment initiation
* `UpdateSigningBasketPsuData` - Update PSU data for signing basket

### Confirmation of Funds Service (PIIS)

* `CheckAvailabilityOfFunds` - Confirmation of funds request

### Payment Initiation Service (PIS)

* `CancelPayment` - Payment cancellation request
* `GetPaymentCancellationScaStatus` - Read the SCA status of the payment cancellation's authorisation
* `GetPaymentInformation` - Get payment information
* `GetPaymentInitiationAuthorisation` - Get payment initiation authorisation sub-resources request
* `GetPaymentInitiationCancellationAuthorisationInformation` - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
* `GetPaymentInitiationScaStatus` - Read the SCA status of the payment authorisation
* `GetPaymentInitiationStatus` - Payment initiation status request
* `InitiatePayment` - Payment initiation request
* `StartPaymentAuthorisation` - Start the authorisation process for a payment initiation
* `StartPaymentInitiationCancellationAuthorisation` - Start the authorisation process for the cancellation of the addressed payment
* `UpdatePaymentCancellationPsuData` - Update PSU data for payment initiation cancellation
* `UpdatePaymentPsuData` - Update PSU data for payment initiation

### Signing Baskets Service (SBS)

* `CreateSigningBasket` - Create a signing basket resource
* `DeleteSigningBasket` - Delete the signing basket
* `GetSigningBasket` - Returns the content of an signing basket object
* `GetSigningBasketAuthorisation` - Get signing basket authorisation sub-resources request
* `GetSigningBasketScaStatus` - Read the SCA status of the signing basket authorisation
* `GetSigningBasketStatus` - Read the status of the signing basket
* `StartSigningBasketAuthorisation` - Start the authorisation process for a signing basket
* `UpdateSigningBasketPsuData` - Update PSU data for signing basket

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
