package shared



type CustomerViewModel struct {
    Birthdate *string `json:"birthdate,omitempty"`
    BusinessName *string `json:"businessName,omitempty"`
    CompanyName *string `json:"companyName,omitempty"`
    CreatedBy *string `json:"createdBy,omitempty"`
    CreatedOn *string `json:"createdOn,omitempty"`
    DeletedStatus *bool `json:"deletedStatus,omitempty"`
    DeletedTime *string `json:"deletedTime,omitempty"`
    Disabled *bool `json:"disabled,omitempty"`
    Email *string `json:"email,omitempty"`
    EmailInfo *bool `json:"emailInfo,omitempty"`
    EmailPromotion *bool `json:"emailPromotion,omitempty"`
    Firstname *string `json:"firstname,omitempty"`
    Gender *string `json:"gender,omitempty"`
    GroupID *string `json:"groupId,omitempty"`
    ID *string `json:"id,omitempty"`
    InviteEmailSent *string `json:"inviteEmailSent,omitempty"`
    LastVisitDate *string `json:"lastVisitDate,omitempty"`
    Lastname *string `json:"lastname,omitempty"`
    Latitude *string `json:"latitude,omitempty"`
    LocationID *string `json:"locationId,omitempty"`
    Longitude *string `json:"longitude,omitempty"`
    ModifiedBy *string `json:"modifiedBy,omitempty"`
    ModifiedOn *string `json:"modifiedOn,omitempty"`
    Name *string `json:"name,omitempty"`
    NotificationType *string `json:"notificationType,omitempty"`
    ObjectName *string `json:"objectName,omitempty"`
    RegisteredBy *string `json:"registeredBy,omitempty"`
    RegistrationDate *string `json:"registrationDate,omitempty"`
    ResourceID *string `json:"resourceId,omitempty"`
    StripeCustomerID *string `json:"stripeCustomerId,omitempty"`
    SubscriptionID *string `json:"subscriptionId,omitempty"`
    VerificationDate *string `json:"verificationDate,omitempty"`
    VerifiedBy *string `json:"verifiedBy,omitempty"`
    WelcomeEmailSent *string `json:"welcomeEmailSent,omitempty"`
    
}

