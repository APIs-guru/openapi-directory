package shared



type PeriodicPaymentInitiationMultipartBody struct {
    JSONStandingorderType *PeriodicPaymentInitiationXMLPart2StandingorderTypeJSON `multipartForm:"name=json_standingorderType,json"`
    XMLSct *interface{} `multipartForm:"name=xml_sct,json"`
    
}

