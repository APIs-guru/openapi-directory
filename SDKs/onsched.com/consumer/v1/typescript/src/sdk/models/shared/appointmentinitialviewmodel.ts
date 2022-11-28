import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppointmentAuditViewModel } from "./appointmentauditviewmodel";
import { CustomFieldViewModel } from "./customfieldviewmodel";
import { AppointmentCustomerViewModel } from "./appointmentcustomerviewmodel";
import { AppointmentResourceViewModel } from "./appointmentresourceviewmodel";



export class AppointmentInitialViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auditTrail", elemType: AppointmentAuditViewModel })
  auditTrail?: AppointmentAuditViewModel[];

  @SpeakeasyMetadata({ data: "json, name=bookedBy" })
  bookedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=businessName" })
  businessName?: string;

  @SpeakeasyMetadata({ data: "json, name=calendarId" })
  calendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=confirmationNumber" })
  confirmationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: string;

  @SpeakeasyMetadata({ data: "json, name=customFields", elemType: CustomFieldViewModel })
  customFields?: Map<string, CustomFieldViewModel>;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=customerMessage" })
  customerMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=customers", elemType: AppointmentCustomerViewModel })
  customers?: AppointmentCustomerViewModel[];

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=dateInternational" })
  dateInternational?: string;

  @SpeakeasyMetadata({ data: "json, name=downloadIcsUrl" })
  downloadIcsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=emailConfirmationSent" })
  emailConfirmationSent?: string;

  @SpeakeasyMetadata({ data: "json, name=emailReminderSent" })
  emailReminderSent?: string;

  @SpeakeasyMetadata({ data: "json, name=endDateTime" })
  endDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=firstname" })
  firstname?: string;

  @SpeakeasyMetadata({ data: "json, name=groupSize" })
  groupSize?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedBy" })
  lastModifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedOn" })
  lastModifiedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=lastname" })
  lastname?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=onlineBooking" })
  onlineBooking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=paymentStatus" })
  paymentStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneExt" })
  phoneExt?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneType" })
  phoneType?: string;

  @SpeakeasyMetadata({ data: "json, name=rescheduledId" })
  rescheduledId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceGroupId" })
  resourceGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceGroupName" })
  resourceGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceImageUrl" })
  resourceImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: AppointmentResourceViewModel })
  resources?: AppointmentResourceViewModel[];

  @SpeakeasyMetadata({ data: "json, name=serviceAllocationId" })
  serviceAllocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceImageUrl" })
  serviceImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=smsConfirmationSent" })
  smsConfirmationSent?: string;

  @SpeakeasyMetadata({ data: "json, name=smsReminderSent" })
  smsReminderSent?: string;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=stripeChargeId" })
  stripeChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=stripeRefundId" })
  stripeRefundId?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: number;

  @SpeakeasyMetadata({ data: "json, name=timezoneIana" })
  timezoneIana?: string;

  @SpeakeasyMetadata({ data: "json, name=timezoneId" })
  timezoneId?: string;
}
