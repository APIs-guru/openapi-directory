import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OnlineSettingsViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=availabilityForm" })
  availabilityForm?: number;

  @Metadata({ data: "json, name=bookAheadUnit" })
  bookAheadUnit?: number;

  @Metadata({ data: "json, name=bookAheadValue" })
  bookAheadValue?: number;

  @Metadata({ data: "json, name=bookInAdvance" })
  bookInAdvance?: number;

  @Metadata({ data: "json, name=bookWithAccount" })
  bookWithAccount?: boolean;

  @Metadata({ data: "json, name=bookingConfirmationMessage" })
  bookingConfirmationMessage?: string;

  @Metadata({ data: "json, name=bookingMessage" })
  bookingMessage?: string;

  @Metadata({ data: "json, name=bookingPolicy" })
  bookingPolicy?: string;

  @Metadata({ data: "json, name=bookingTimerMins" })
  bookingTimerMins?: number;

  @Metadata({ data: "json, name=businessId" })
  businessId?: string;

  @Metadata({ data: "json, name=companyId" })
  companyId?: string;

  @Metadata({ data: "json, name=customerBookingsPerDay" })
  customerBookingsPerDay?: number;

  @Metadata({ data: "json, name=customerVerification" })
  customerVerification?: boolean;

  @Metadata({ data: "json, name=defaultService" })
  defaultService?: boolean;

  @Metadata({ data: "json, name=defaultToCustomerTimezone" })
  defaultToCustomerTimezone?: boolean;

  @Metadata({ data: "json, name=disableAuthorization" })
  disableAuthorization?: boolean;

  @Metadata({ data: "json, name=enableWorldTimezones" })
  enableWorldTimezones?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=familyMembersEnabled" })
  familyMembersEnabled?: boolean;

  @Metadata({ data: "json, name=firstAvailable" })
  firstAvailable?: boolean;

  @Metadata({ data: "json, name=formFlow" })
  formFlow?: number;

  @Metadata({ data: "json, name=hideBreadCrumbNav" })
  hideBreadCrumbNav?: boolean;

  @Metadata({ data: "json, name=hideContinueBooking" })
  hideContinueBooking?: boolean;

  @Metadata({ data: "json, name=hideLocationNav" })
  hideLocationNav?: boolean;

  @Metadata({ data: "json, name=hideNavBar" })
  hideNavBar?: boolean;

  @Metadata({ data: "json, name=hideServiceGroupsNav" })
  hideServiceGroupsNav?: boolean;

  @Metadata({ data: "json, name=hideServicesNav" })
  hideServicesNav?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lateCancelAction" })
  lateCancelAction?: number;

  @Metadata({ data: "json, name=lateCancelHours" })
  lateCancelHours?: number;

  @Metadata({ data: "json, name=lateRescheduleAction" })
  lateRescheduleAction?: number;

  @Metadata({ data: "json, name=lateRescheduleHours" })
  lateRescheduleHours?: number;

  @Metadata({ data: "json, name=liveMode" })
  liveMode?: boolean;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=resourceAnyLabel" })
  resourceAnyLabel?: string;

  @Metadata({ data: "json, name=resourceLabel" })
  resourceLabel?: string;

  @Metadata({ data: "json, name=resourceSelection" })
  resourceSelection?: boolean;

  @Metadata({ data: "json, name=returnToAvailability" })
  returnToAvailability?: boolean;

  @Metadata({ data: "json, name=returnToService" })
  returnToService?: boolean;

  @Metadata({ data: "json, name=serviceLabel" })
  serviceLabel?: string;

  @Metadata({ data: "json, name=showBusinessLogo" })
  showBusinessLogo?: boolean;

  @Metadata({ data: "json, name=showOnSchedLogo" })
  showOnSchedLogo?: boolean;

  @Metadata({ data: "json, name=showServiceGroups" })
  showServiceGroups?: boolean;
}
