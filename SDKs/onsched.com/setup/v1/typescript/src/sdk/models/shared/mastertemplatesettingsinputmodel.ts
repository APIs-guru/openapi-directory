import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MasterTemplateSettingsInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=centerEmailContent" })
  centerEmailContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=centerEmailContentPanel" })
  centerEmailContentPanel?: boolean;

  @SpeakeasyMetadata({ data: "json, name=centerEmailFooter" })
  centerEmailFooter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contentBackgroundColor" })
  contentBackgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=contentColor" })
  contentColor?: string;

  @SpeakeasyMetadata({ data: "json, name=contentLinkColor" })
  contentLinkColor?: string;

  @SpeakeasyMetadata({ data: "json, name=emailBackgroundColor" })
  emailBackgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=emailColor" })
  emailColor?: string;

  @SpeakeasyMetadata({ data: "json, name=emailLinkColor" })
  emailLinkColor?: string;

  @SpeakeasyMetadata({ data: "json, name=footerFontSize" })
  footerFontSize?: string;

  @SpeakeasyMetadata({ data: "json, name=footerLogoHeight" })
  footerLogoHeight?: string;

  @SpeakeasyMetadata({ data: "json, name=footerLogoPadding" })
  footerLogoPadding?: string;

  @SpeakeasyMetadata({ data: "json, name=footerPanelEmailContact" })
  footerPanelEmailContact?: boolean;

  @SpeakeasyMetadata({ data: "json, name=footerPanelPhoneContact" })
  footerPanelPhoneContact?: boolean;

  @SpeakeasyMetadata({ data: "json, name=footerPanelWebsiteContact" })
  footerPanelWebsiteContact?: boolean;

  @SpeakeasyMetadata({ data: "json, name=headerLogoHeight" })
  headerLogoHeight?: string;

  @SpeakeasyMetadata({ data: "json, name=headerLogoPadding" })
  headerLogoPadding?: string;

  @SpeakeasyMetadata({ data: "json, name=panelBackgroundColor" })
  panelBackgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=panelColor" })
  panelColor?: string;

  @SpeakeasyMetadata({ data: "json, name=panelLinkColor" })
  panelLinkColor?: string;

  @SpeakeasyMetadata({ data: "json, name=privacyPolicyLink" })
  privacyPolicyLink?: string;

  @SpeakeasyMetadata({ data: "json, name=showContentPanel" })
  showContentPanel?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showFooterLogo" })
  showFooterLogo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showFooterPanel" })
  showFooterPanel?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showHeaderLogo" })
  showHeaderLogo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showHeaderPanel" })
  showHeaderPanel?: boolean;
}
