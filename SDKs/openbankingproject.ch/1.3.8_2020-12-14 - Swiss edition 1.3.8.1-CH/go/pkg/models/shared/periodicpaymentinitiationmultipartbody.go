package shared

// PeriodicPaymentInitiationMultipartBody
// The multipart message definition for the initiation of a periodic payment initiation
// where the information of the payment is contained in a pain.001 message (Part 1) and
// the additional informations related to the periodic payment is an additional JSON message (Part 2).
type PeriodicPaymentInitiationMultipartBody struct {
	JSONStandingorderType *PeriodicPaymentInitiationXMLPart2StandingorderTypeJSON `multipartForm:"name=json_standingorderType,json"`
	XMLSct                *interface{}                                            `multipartForm:"name=xml_sct,json"`
}
