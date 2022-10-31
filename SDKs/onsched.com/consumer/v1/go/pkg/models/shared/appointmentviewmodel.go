package shared



type AppointmentViewModel struct {
    AuditTrail []AppointmentAuditViewModel `json:"auditTrail,omitempty"`
    BookedBy *string `json:"bookedBy,omitempty"`
    BusinessName *string `json:"businessName,omitempty"`
    CalendarID *string `json:"calendarId,omitempty"`
    ConfirmationNumber *string `json:"confirmationNumber,omitempty"`
    Confirmed *bool `json:"confirmed,omitempty"`
    CreateDate *string `json:"createDate,omitempty"`
    CustomFields map[string]CustomFieldViewModel `json:"customFields,omitempty"`
    CustomerID *string `json:"customerId,omitempty"`
    CustomerMessage *string `json:"customerMessage,omitempty"`
    Customers []AppointmentCustomerViewModel `json:"customers,omitempty"`
    Date *string `json:"date,omitempty"`
    DateInternational *string `json:"dateInternational,omitempty"`
    DownloadIcsURL *string `json:"downloadIcsUrl,omitempty"`
    Duration *int32 `json:"duration,omitempty"`
    Email *string `json:"email,omitempty"`
    EmailConfirmationSent *string `json:"emailConfirmationSent,omitempty"`
    EmailReminderSent *string `json:"emailReminderSent,omitempty"`
    EndDateTime *string `json:"endDateTime,omitempty"`
    Firstname *string `json:"firstname,omitempty"`
    GroupSize *int32 `json:"groupSize,omitempty"`
    ID *string `json:"id,omitempty"`
    IPAddress *string `json:"ipAddress,omitempty"`
    LastModifiedBy *string `json:"lastModifiedBy,omitempty"`
    LastModifiedOn *string `json:"lastModifiedOn,omitempty"`
    Lastname *string `json:"lastname,omitempty"`
    Latitude *string `json:"latitude,omitempty"`
    Location *string `json:"location,omitempty"`
    LocationID *string `json:"locationId,omitempty"`
    Longitude *string `json:"longitude,omitempty"`
    Name *string `json:"name,omitempty"`
    Notes *string `json:"notes,omitempty"`
    ObjectName *string `json:"objectName,omitempty"`
    OnlineBooking *bool `json:"onlineBooking,omitempty"`
    PaymentStatus *int32 `json:"paymentStatus,omitempty"`
    Phone *string `json:"phone,omitempty"`
    PhoneExt *string `json:"phoneExt,omitempty"`
    PhoneType *string `json:"phoneType,omitempty"`
    RescheduledID *string `json:"rescheduledId,omitempty"`
    ResourceGroupID *string `json:"resourceGroupId,omitempty"`
    ResourceGroupName *string `json:"resourceGroupName,omitempty"`
    ResourceID *string `json:"resourceId,omitempty"`
    ResourceImageURL *string `json:"resourceImageUrl,omitempty"`
    ResourceName *string `json:"resourceName,omitempty"`
    Resources []AppointmentResourceViewModel `json:"resources,omitempty"`
    ServiceAllocationID *string `json:"serviceAllocationId,omitempty"`
    ServiceID *string `json:"serviceId,omitempty"`
    ServiceImageURL *string `json:"serviceImageUrl,omitempty"`
    ServiceName *string `json:"serviceName,omitempty"`
    SmsConfirmationSent *string `json:"smsConfirmationSent,omitempty"`
    SmsReminderSent *string `json:"smsReminderSent,omitempty"`
    StartDateTime *string `json:"startDateTime,omitempty"`
    Status *string `json:"status,omitempty"`
    StripeChargeID *string `json:"stripeChargeId,omitempty"`
    StripeRefundID *string `json:"stripeRefundId,omitempty"`
    Time *int32 `json:"time,omitempty"`
    Timezone *int32 `json:"timezone,omitempty"`
    TimezoneIana *string `json:"timezoneIana,omitempty"`
    TimezoneID *string `json:"timezoneId,omitempty"`
    
}

