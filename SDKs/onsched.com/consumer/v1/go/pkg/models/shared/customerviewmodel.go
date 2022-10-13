package shared

type CustomerViewModel struct {
	Birthdate        *string `json:"birthdate"`
	BusinessName     *string `json:"businessName"`
	CompanyName      *string `json:"companyName"`
	CreatedBy        *string `json:"createdBy"`
	CreatedOn        *string `json:"createdOn"`
	DeletedStatus    *bool   `json:"deletedStatus"`
	DeletedTime      *string `json:"deletedTime"`
	Disabled         *bool   `json:"disabled"`
	Email            *string `json:"email"`
	EmailInfo        *bool   `json:"emailInfo"`
	EmailPromotion   *bool   `json:"emailPromotion"`
	Firstname        *string `json:"firstname"`
	Gender           *string `json:"gender"`
	GroupID          *string `json:"groupId"`
	ID               *string `json:"id"`
	InviteEmailSent  *string `json:"inviteEmailSent"`
	LastVisitDate    *string `json:"lastVisitDate"`
	Lastname         *string `json:"lastname"`
	Latitude         *string `json:"latitude"`
	LocationID       *string `json:"locationId"`
	Longitude        *string `json:"longitude"`
	ModifiedBy       *string `json:"modifiedBy"`
	ModifiedOn       *string `json:"modifiedOn"`
	Name             *string `json:"name"`
	NotificationType *string `json:"notificationType"`
	ObjectName       *string `json:"objectName"`
	RegisteredBy     *string `json:"registeredBy"`
	RegistrationDate *string `json:"registrationDate"`
	ResourceID       *string `json:"resourceId"`
	StripeCustomerID *string `json:"stripeCustomerId"`
	SubscriptionID   *string `json:"subscriptionId"`
	VerificationDate *string `json:"verificationDate"`
	VerifiedBy       *string `json:"verifiedBy"`
	WelcomeEmailSent *string `json:"welcomeEmailSent"`
}
