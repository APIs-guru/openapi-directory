import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Notification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=crmExperimentIds" })
  crmExperimentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=doc_id" })
  docId?: string;

  @SpeakeasyMetadata({ data: "json, name=doc_type" })
  docType?: string;

  @SpeakeasyMetadata({ data: "json, name=dont_show_notification" })
  dontShowNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=is_document_mature" })
  isDocumentMature?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationGroup" })
  notificationGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=notification_type" })
  notificationType?: string;

  @SpeakeasyMetadata({ data: "json, name=pcampaign_id" })
  pcampaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=show_notification_settings_action" })
  showNotificationSettingsAction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetUrl" })
  targetUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=timeToExpireMs" })
  timeToExpireMs?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
