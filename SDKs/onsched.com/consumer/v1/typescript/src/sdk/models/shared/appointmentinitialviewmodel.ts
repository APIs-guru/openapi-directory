import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppointmentAuditViewModel } from "./appointmentauditviewmodel";
import { CustomFieldViewModel } from "./customfieldviewmodel";
import { AppointmentCustomerViewModel } from "./appointmentcustomerviewmodel";
import { AppointmentResourceViewModel } from "./appointmentresourceviewmodel";


export class AppointmentInitialViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=auditTrail", elemType: shared.AppointmentAuditViewModel })
  auditTrail?: AppointmentAuditViewModel[];

  @Metadata({ data: "json, name=bookedBy" })
  bookedBy?: string;

  @Metadata({ data: "json, name=businessName" })
  businessName?: string;

  @Metadata({ data: "json, name=calendarId" })
  calendarId?: string;

  @Metadata({ data: "json, name=confirmationNumber" })
  confirmationNumber?: string;

  @Metadata({ data: "json, name=confirmed" })
  confirmed?: boolean;

  @Metadata({ data: "json, name=createDate" })
  createDate?: string;

  @Metadata({ data: "json, name=customFields", elemType: shared.CustomFieldViewModel })
  customFields?: Map<string, CustomFieldViewModel>;

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=customerMessage" })
  customerMessage?: string;

  @Metadata({ data: "json, name=customers", elemType: shared.AppointmentCustomerViewModel })
  customers?: AppointmentCustomerViewModel[];

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=dateInternational" })
  dateInternational?: string;

  @Metadata({ data: "json, name=downloadIcsUrl" })
  downloadIcsUrl?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=emailConfirmationSent" })
  emailConfirmationSent?: string;

  @Metadata({ data: "json, name=emailReminderSent" })
  emailReminderSent?: string;

  @Metadata({ data: "json, name=endDateTime" })
  endDateTime?: string;

  @Metadata({ data: "json, name=firstname" })
  firstname?: string;

  @Metadata({ data: "json, name=groupSize" })
  groupSize?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=lastModifiedBy" })
  lastModifiedBy?: string;

  @Metadata({ data: "json, name=lastModifiedOn" })
  lastModifiedOn?: string;

  @Metadata({ data: "json, name=lastname" })
  lastname?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=longitude" })
  longitude?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=onlineBooking" })
  onlineBooking?: boolean;

  @Metadata({ data: "json, name=paymentStatus" })
  paymentStatus?: number;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=phoneExt" })
  phoneExt?: string;

  @Metadata({ data: "json, name=phoneType" })
  phoneType?: string;

  @Metadata({ data: "json, name=rescheduledId" })
  rescheduledId?: string;

  @Metadata({ data: "json, name=resourceGroupId" })
  resourceGroupId?: string;

  @Metadata({ data: "json, name=resourceGroupName" })
  resourceGroupName?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=resourceImageUrl" })
  resourceImageUrl?: string;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.AppointmentResourceViewModel })
  resources?: AppointmentResourceViewModel[];

  @Metadata({ data: "json, name=serviceAllocationId" })
  serviceAllocationId?: string;

  @Metadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @Metadata({ data: "json, name=serviceImageUrl" })
  serviceImageUrl?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=smsConfirmationSent" })
  smsConfirmationSent?: string;

  @Metadata({ data: "json, name=smsReminderSent" })
  smsReminderSent?: string;

  @Metadata({ data: "json, name=startDateTime" })
  startDateTime?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=stripeChargeId" })
  stripeChargeId?: string;

  @Metadata({ data: "json, name=stripeRefundId" })
  stripeRefundId?: string;

  @Metadata({ data: "json, name=time" })
  time?: number;

  @Metadata({ data: "json, name=timezone" })
  timezone?: number;

  @Metadata({ data: "json, name=timezoneIana" })
  timezoneIana?: string;

  @Metadata({ data: "json, name=timezoneId" })
  timezoneId?: string;
}
