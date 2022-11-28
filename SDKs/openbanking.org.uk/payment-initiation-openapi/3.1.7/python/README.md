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
    
req = operations.CreateDomesticPaymentConsentsRequest(
    security=operations.CreateDomesticPaymentConsentsSecurity(
        tppo_auth2_security=shared.SchemeTppoAuth2Security(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    headers=operations.CreateDomesticPaymentConsentsHeaders(
        authorization="eligendi",
        x_customer_user_agent="provident",
        x_fapi_auth_date="qui",
        x_fapi_customer_ip_address="consequatur",
        x_fapi_interaction_id="molestiae",
        x_idempotency_key="eaque",
        x_jws_signature="accusamus",
    ),
    request=operations.CreateDomesticPaymentConsentsRequests(
        application_jose_plus_jwe="nihil".encode(),
        ob_write_domestic_consent4=shared.ObWriteDomesticConsent4(
            data=shared.ObWriteDomesticConsent4Data(
                authorisation=shared.ObWriteDomesticConsent4DataAuthorisation(
                    authorisation_type="Any",
                    completion_date_time="1979-04-22T05:21:06Z",
                ),
                initiation=shared.ObWriteDomesticConsent4DataInitiation(
                    creditor_account=shared.ObWriteDomesticConsent4DataInitiationCreditorAccount(
                        identification="facere",
                        name="nesciunt",
                        scheme_name="ullam",
                        secondary_identification="placeat",
                    ),
                    creditor_postal_address=shared.ObPostalAddress6(
                        address_line=[
                            "sed",
                            "consectetur",
                            "corrupti",
                        ],
                        address_type="Residential",
                        building_number="exercitationem",
                        country="assumenda",
                        country_sub_division="vel",
                        department="hic",
                        post_code="ullam",
                        street_name="omnis",
                        sub_department="delectus",
                        town_name="tempora",
                    ),
                    debtor_account=shared.ObWriteDomesticConsent4DataInitiationDebtorAccount(
                        identification="eveniet",
                        name="consequatur",
                        scheme_name="qui",
                        secondary_identification="nihil",
                    ),
                    end_to_end_identification="rerum",
                    instructed_amount=shared.ObWriteDomesticConsent4DataInitiationInstructedAmount(
                        amount="minima",
                        currency="qui",
                    ),
                    instruction_identification="quis",
                    local_instrument="ea",
                    remittance_information=shared.ObWriteDomesticConsent4DataInitiationRemittanceInformation(
                        reference="expedita",
                        unstructured="rerum",
                    ),
                    supplementary_data={
                        "quidem": "vel",
                        "laudantium": "officiis",
                    },
                ),
                read_refund_account="Yes",
                sca_support_data=shared.ObscaSupportData1(
                    applied_authentication_approach="CA",
                    reference_payment_order_id="dolores",
                    requested_sca_exemption_type="Kiosk",
                ),
            ),
            risk=shared.ObRisk1(
                delivery_address=shared.ObRisk1DeliveryAddress(
                    address_line=[
                        "a",
                        "voluptas",
                        "omnis",
                    ],
                    building_number="laudantium",
                    country="assumenda",
                    country_sub_division="dicta",
                    post_code="omnis",
                    street_name="nisi",
                    town_name="voluptatem",
                ),
                merchant_category_code="aspernatur",
                merchant_customer_identification="iusto",
                payment_context_code="PartyToParty",
            ),
        ),
        ob_write_domestic_consent5=shared.ObWriteDomesticConsent4(
            data=shared.ObWriteDomesticConsent4Data(
                authorisation=shared.ObWriteDomesticConsent4DataAuthorisation(
                    authorisation_type="Single",
                    completion_date_time="1991-02-20T06:05:16Z",
                ),
                initiation=shared.ObWriteDomesticConsent4DataInitiation(
                    creditor_account=shared.ObWriteDomesticConsent4DataInitiationCreditorAccount(
                        identification="autem",
                        name="necessitatibus",
                        scheme_name="sunt",
                        secondary_identification="dolor",
                    ),
                    creditor_postal_address=shared.ObPostalAddress6(
                        address_line=[
                            "et",
                            "voluptatum",
                            "quia",
                        ],
                        address_type="Statement",
                        building_number="quia",
                        country="aut",
                        country_sub_division="cupiditate",
                        department="dolores",
                        post_code="amet",
                        street_name="quia",
                        sub_department="beatae",
                        town_name="quidem",
                    ),
                    debtor_account=shared.ObWriteDomesticConsent4DataInitiationDebtorAccount(
                        identification="id",
                        name="ratione",
                        scheme_name="inventore",
                        secondary_identification="ratione",
                    ),
                    end_to_end_identification="consequuntur",
                    instructed_amount=shared.ObWriteDomesticConsent4DataInitiationInstructedAmount(
                        amount="sequi",
                        currency="velit",
                    ),
                    instruction_identification="autem",
                    local_instrument="est",
                    remittance_information=shared.ObWriteDomesticConsent4DataInitiationRemittanceInformation(
                        reference="ullam",
                        unstructured="enim",
                    ),
                    supplementary_data={
                        "quia": "harum",
                        "dolores": "corporis",
                        "sit": "saepe",
                    },
                ),
                read_refund_account="Yes",
                sca_support_data=shared.ObscaSupportData1(
                    applied_authentication_approach="CA",
                    reference_payment_order_id="aut",
                    requested_sca_exemption_type="Kiosk",
                ),
            ),
            risk=shared.ObRisk1(
                delivery_address=shared.ObRisk1DeliveryAddress(
                    address_line=[
                        "omnis",
                        "expedita",
                        "non",
                    ],
                    building_number="expedita",
                    country="quae",
                    country_sub_division="assumenda",
                    post_code="asperiores",
                    street_name="ut",
                    town_name="nesciunt",
                ),
                merchant_category_code="libero",
                merchant_customer_identification="voluptatibus",
                payment_context_code="Other",
            ),
        ),
    ),
)
    
res = s.sdk.create_domestic_payment_consents(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_domestic_payment_consents` - Create Domestic Payment Consents
* `create_domestic_payments` - Create Domestic Payments
* `create_domestic_scheduled_payment_consents` - Create Domestic Scheduled Payment Consents
* `create_domestic_scheduled_payments` - Create Domestic Scheduled Payments
* `create_domestic_standing_order_consents` - Create Domestic Standing Order Consents
* `create_domestic_standing_orders` - Create Domestic Standing Orders
* `create_file_payment_consents` - Create File Payment Consents
* `create_file_payment_consents_consent_id_file` - Create File Payment Consents
* `create_file_payments` - Create File Payments
* `create_international_payment_consents` - Create International Payment Consents
* `create_international_payments` - Create International Payments
* `create_international_scheduled_payment_consents` - Create International Scheduled Payment Consents
* `create_international_scheduled_payments` - Create International Scheduled Payments
* `create_international_standing_order_consents` - Create International Standing Order Consents
* `create_international_standing_orders` - Create International Standing Orders
* `get_domestic_payment_consents_consent_id` - Get Domestic Payment Consents
* `get_domestic_payment_consents_consent_id_funds_confirmation` - Get Domestic Payment Consents Funds Confirmation
* `get_domestic_payments_domestic_payment_id` - Get Domestic Payments
* `get_domestic_payments_domestic_payment_id_payment_details` - Get Payment Details
* `get_domestic_scheduled_payment_consents_consent_id` - Get Domestic Scheduled Payment Consents
* `get_domestic_scheduled_payments_domestic_scheduled_payment_id` - Get Domestic Scheduled Payments
* `get_domestic_scheduled_payments_domestic_scheduled_payment_id_payment_details` - Get Payment Details
* `get_domestic_standing_order_consents_consent_id` - Get Domestic Standing Order Consents
* `get_domestic_standing_orders_domestic_standing_order_id` - Get Domestic Standing Orders
* `get_domestic_standing_orders_domestic_standing_order_id_payment_details` - Get Payment Details
* `get_file_payment_consents_consent_id` - Get File Payment Consents
* `get_file_payment_consents_consent_id_file` - Get File Payment Consents
* `get_file_payments_file_payment_id` - Get File Payments
* `get_file_payments_file_payment_id_payment_details` - Get Payment Details
* `get_file_payments_file_payment_id_report_file` - Get File Payments
* `get_international_payment_consents_consent_id` - Get International Payment Consents
* `get_international_payment_consents_consent_id_funds_confirmation` - Get International Payment Consents Funds Confirmation
* `get_international_payments_international_payment_id` - Get International Payments
* `get_international_payments_international_payment_id_payment_details` - Get Payment Details
* `get_international_scheduled_payment_consents_consent_id` - Get International Scheduled Payment Consents
* `get_international_scheduled_payment_consents_consent_id_funds_confirmation` - Get International Scheduled Payment Consents Funds Confirmation
* `get_international_scheduled_payments_international_scheduled_payment_id` - Get International Scheduled Payments
* `get_international_scheduled_payments_international_scheduled_payment_id_payment_details` - Get Payment Details
* `get_international_standing_order_consents_consent_id` - Get International Standing Order Consents
* `get_international_standing_orders_international_standing_order_payment_id` - Get International Standing Orders
* `get_international_standing_orders_international_standing_order_payment_id_payment_details` - Get Payment Details

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
