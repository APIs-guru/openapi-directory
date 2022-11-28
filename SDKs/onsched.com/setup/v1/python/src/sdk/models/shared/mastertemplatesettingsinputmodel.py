from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MasterTemplateSettingsInputModel:
    center_email_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('centerEmailContent') }})
    center_email_content_panel: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('centerEmailContentPanel') }})
    center_email_footer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('centerEmailFooter') }})
    content_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentBackgroundColor') }})
    content_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentColor') }})
    content_link_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentLinkColor') }})
    email_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailBackgroundColor') }})
    email_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailColor') }})
    email_link_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailLinkColor') }})
    footer_font_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footerFontSize') }})
    footer_logo_height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footerLogoHeight') }})
    footer_logo_padding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footerLogoPadding') }})
    footer_panel_email_contact: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footerPanelEmailContact') }})
    footer_panel_phone_contact: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footerPanelPhoneContact') }})
    footer_panel_website_contact: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footerPanelWebsiteContact') }})
    header_logo_height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerLogoHeight') }})
    header_logo_padding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerLogoPadding') }})
    panel_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelBackgroundColor') }})
    panel_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelColor') }})
    panel_link_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelLinkColor') }})
    privacy_policy_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacyPolicyLink') }})
    show_content_panel: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showContentPanel') }})
    show_footer_logo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showFooterLogo') }})
    show_footer_panel: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showFooterPanel') }})
    show_header_logo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showHeaderLogo') }})
    show_header_panel: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showHeaderPanel') }})
    
