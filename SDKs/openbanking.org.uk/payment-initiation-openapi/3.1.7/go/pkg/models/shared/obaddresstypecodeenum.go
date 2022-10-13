package shared

type ObAddressTypeCodeEnum string

const (
	ObAddressTypeCodeEnumBusiness       ObAddressTypeCodeEnum = "Business"
	ObAddressTypeCodeEnumCorrespondence ObAddressTypeCodeEnum = "Correspondence"
	ObAddressTypeCodeEnumDeliveryTo     ObAddressTypeCodeEnum = "DeliveryTo"
	ObAddressTypeCodeEnumMailTo         ObAddressTypeCodeEnum = "MailTo"
	ObAddressTypeCodeEnumPoBox          ObAddressTypeCodeEnum = "POBox"
	ObAddressTypeCodeEnumPostal         ObAddressTypeCodeEnum = "Postal"
	ObAddressTypeCodeEnumResidential    ObAddressTypeCodeEnum = "Residential"
	ObAddressTypeCodeEnumStatement      ObAddressTypeCodeEnum = "Statement"
)
