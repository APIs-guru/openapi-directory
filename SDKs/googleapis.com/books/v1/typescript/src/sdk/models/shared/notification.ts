import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Notification extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=crmExperimentIds" })
  crmExperimentIds?: string[];

  @Metadata({ data: "json, name=doc_id" })
  docId?: string;

  @Metadata({ data: "json, name=doc_type" })
  docType?: string;

  @Metadata({ data: "json, name=dont_show_notification" })
  dontShowNotification?: boolean;

  @Metadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @Metadata({ data: "json, name=is_document_mature" })
  isDocumentMature?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=notificationGroup" })
  notificationGroup?: string;

  @Metadata({ data: "json, name=notification_type" })
  notificationType?: string;

  @Metadata({ data: "json, name=pcampaign_id" })
  pcampaignId?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=show_notification_settings_action" })
  showNotificationSettingsAction?: boolean;

  @Metadata({ data: "json, name=targetUrl" })
  targetUrl?: string;

  @Metadata({ data: "json, name=timeToExpireMs" })
  timeToExpireMs?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
