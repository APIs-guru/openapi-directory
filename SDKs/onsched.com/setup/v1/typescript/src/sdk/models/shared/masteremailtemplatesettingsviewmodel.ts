import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MasterEmailTemplateSettingsViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=centerEmailContent" })
  centerEmailContent?: boolean;

  @Metadata({ data: "json, name=centerEmailContentPanel" })
  centerEmailContentPanel?: boolean;

  @Metadata({ data: "json, name=centerEmailFooter" })
  centerEmailFooter?: boolean;

  @Metadata({ data: "json, name=contentBackgroundColor" })
  contentBackgroundColor?: string;

  @Metadata({ data: "json, name=contentColor" })
  contentColor?: string;

  @Metadata({ data: "json, name=contentLinkColor" })
  contentLinkColor?: string;

  @Metadata({ data: "json, name=emailBackgroundColor" })
  emailBackgroundColor?: string;

  @Metadata({ data: "json, name=emailColor" })
  emailColor?: string;

  @Metadata({ data: "json, name=emailLinkColor" })
  emailLinkColor?: string;

  @Metadata({ data: "json, name=footerFontSize" })
  footerFontSize?: string;

  @Metadata({ data: "json, name=footerLogoHeight" })
  footerLogoHeight?: string;

  @Metadata({ data: "json, name=footerLogoPadding" })
  footerLogoPadding?: string;

  @Metadata({ data: "json, name=footerPanelEmailContact" })
  footerPanelEmailContact?: boolean;

  @Metadata({ data: "json, name=footerPanelPhoneContact" })
  footerPanelPhoneContact?: boolean;

  @Metadata({ data: "json, name=footerPanelWebsiteContact" })
  footerPanelWebsiteContact?: boolean;

  @Metadata({ data: "json, name=headerLogoHeight" })
  headerLogoHeight?: string;

  @Metadata({ data: "json, name=headerLogoPadding" })
  headerLogoPadding?: string;

  @Metadata({ data: "json, name=panelBackgroundColor" })
  panelBackgroundColor?: string;

  @Metadata({ data: "json, name=panelColor" })
  panelColor?: string;

  @Metadata({ data: "json, name=panelLinkColor" })
  panelLinkColor?: string;

  @Metadata({ data: "json, name=privacyPolicyLink" })
  privacyPolicyLink?: string;

  @Metadata({ data: "json, name=showContentPanel" })
  showContentPanel?: boolean;

  @Metadata({ data: "json, name=showFooterLogo" })
  showFooterLogo?: boolean;

  @Metadata({ data: "json, name=showFooterPanel" })
  showFooterPanel?: boolean;

  @Metadata({ data: "json, name=showHeaderLogo" })
  showHeaderLogo?: boolean;

  @Metadata({ data: "json, name=showHeaderPanel" })
  showHeaderPanel?: boolean;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
