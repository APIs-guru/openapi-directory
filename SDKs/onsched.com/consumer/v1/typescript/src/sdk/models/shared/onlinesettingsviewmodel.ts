import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OnlineSettingsViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availabilityForm" })
  availabilityForm?: number;

  @SpeakeasyMetadata({ data: "json, name=bookAheadUnit" })
  bookAheadUnit?: number;

  @SpeakeasyMetadata({ data: "json, name=bookAheadValue" })
  bookAheadValue?: number;

  @SpeakeasyMetadata({ data: "json, name=bookInAdvance" })
  bookInAdvance?: number;

  @SpeakeasyMetadata({ data: "json, name=bookWithAccount" })
  bookWithAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bookingConfirmationMessage" })
  bookingConfirmationMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=bookingMessage" })
  bookingMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=bookingPolicy" })
  bookingPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=bookingTimerMins" })
  bookingTimerMins?: number;

  @SpeakeasyMetadata({ data: "json, name=businessId" })
  businessId?: string;

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=customerBookingsPerDay" })
  customerBookingsPerDay?: number;

  @SpeakeasyMetadata({ data: "json, name=customerVerification" })
  customerVerification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=defaultService" })
  defaultService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=defaultToCustomerTimezone" })
  defaultToCustomerTimezone?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disableAuthorization" })
  disableAuthorization?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableWorldTimezones" })
  enableWorldTimezones?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=familyMembersEnabled" })
  familyMembersEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=firstAvailable" })
  firstAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=formFlow" })
  formFlow?: number;

  @SpeakeasyMetadata({ data: "json, name=hideBreadCrumbNav" })
  hideBreadCrumbNav?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hideContinueBooking" })
  hideContinueBooking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hideLocationNav" })
  hideLocationNav?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hideNavBar" })
  hideNavBar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hideServiceGroupsNav" })
  hideServiceGroupsNav?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hideServicesNav" })
  hideServicesNav?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lateCancelAction" })
  lateCancelAction?: number;

  @SpeakeasyMetadata({ data: "json, name=lateCancelHours" })
  lateCancelHours?: number;

  @SpeakeasyMetadata({ data: "json, name=lateRescheduleAction" })
  lateRescheduleAction?: number;

  @SpeakeasyMetadata({ data: "json, name=lateRescheduleHours" })
  lateRescheduleHours?: number;

  @SpeakeasyMetadata({ data: "json, name=liveMode" })
  liveMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceAnyLabel" })
  resourceAnyLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceLabel" })
  resourceLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceSelection" })
  resourceSelection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=returnToAvailability" })
  returnToAvailability?: boolean;

  @SpeakeasyMetadata({ data: "json, name=returnToService" })
  returnToService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=serviceLabel" })
  serviceLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=showBusinessLogo" })
  showBusinessLogo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showOnSchedLogo" })
  showOnSchedLogo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showServiceGroups" })
  showServiceGroups?: boolean;
}
