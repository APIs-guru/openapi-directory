package shared




type PaymentServiceEnum string

const (
    PaymentServiceEnumPayments PaymentServiceEnum = "payments"
PaymentServiceEnumBulkPayments PaymentServiceEnum = "bulk-payments"
PaymentServiceEnumPeriodicPayments PaymentServiceEnum = "periodic-payments"
)


