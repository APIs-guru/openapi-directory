package shared




type AuthenticationTypeEnum string

const (
    AuthenticationTypeEnumSmsOtp AuthenticationTypeEnum = "SMS_OTP"
AuthenticationTypeEnumChipOtp AuthenticationTypeEnum = "CHIP_OTP"
AuthenticationTypeEnumPhotoOtp AuthenticationTypeEnum = "PHOTO_OTP"
AuthenticationTypeEnumPushOtp AuthenticationTypeEnum = "PUSH_OTP"
AuthenticationTypeEnumSMTPOtp AuthenticationTypeEnum = "SMTP_OTP"
)


