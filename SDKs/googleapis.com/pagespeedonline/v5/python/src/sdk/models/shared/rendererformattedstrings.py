from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RendererFormattedStrings:
    r"""RendererFormattedStrings
    Message holding the formatted strings used in the renderer.
    """
    
    audit_group_expand_tooltip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditGroupExpandTooltip') }})
    calculator_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calculatorLink') }})
    crc_initial_navigation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crcInitialNavigation') }})
    crc_longest_duration_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crcLongestDurationLabel') }})
    dropdown_copy_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropdownCopyJSON') }})
    dropdown_dark_theme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropdownDarkTheme') }})
    dropdown_print_expanded: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropdownPrintExpanded') }})
    dropdown_print_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropdownPrintSummary') }})
    dropdown_save_gist: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropdownSaveGist') }})
    dropdown_save_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropdownSaveHTML') }})
    dropdown_save_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropdownSaveJSON') }})
    dropdown_viewer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropdownViewer') }})
    error_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorLabel') }})
    error_missing_audit_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMissingAuditInfo') }})
    footer_issue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footerIssue') }})
    lab_data_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labDataTitle') }})
    ls_performance_category_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lsPerformanceCategoryDescription') }})
    manual_audits_group_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualAuditsGroupTitle') }})
    not_applicable_audits_group_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notApplicableAuditsGroupTitle') }})
    opportunity_resource_column_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opportunityResourceColumnLabel') }})
    opportunity_savings_column_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opportunitySavingsColumnLabel') }})
    passed_audits_group_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passedAuditsGroupTitle') }})
    runtime_desktop_emulation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeDesktopEmulation') }})
    runtime_mobile_emulation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeMobileEmulation') }})
    runtime_no_emulation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeNoEmulation') }})
    runtime_settings_axe_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeSettingsAxeVersion') }})
    runtime_settings_benchmark: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeSettingsBenchmark') }})
    runtime_settings_cpu_throttling: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeSettingsCPUThrottling') }})
    runtime_settings_channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeSettingsChannel') }})
    runtime_settings_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeSettingsDevice') }})
    runtime_settings_fetch_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeSettingsFetchTime') }})
    runtime_settings_network_throttling: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeSettingsNetworkThrottling') }})
    runtime_settings_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeSettingsTitle') }})
    runtime_settings_ua: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeSettingsUA') }})
    runtime_settings_ua_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeSettingsUANetwork') }})
    runtime_settings_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeSettingsUrl') }})
    runtime_unknown: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeUnknown') }})
    scorescale_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scorescaleLabel') }})
    show_relevant_audits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showRelevantAudits') }})
    snippet_collapse_button_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippetCollapseButtonLabel') }})
    snippet_expand_button_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippetExpandButtonLabel') }})
    third_party_resources_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyResourcesLabel') }})
    throttling_provided: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('throttlingProvided') }})
    toplevel_warnings_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toplevelWarningsMessage') }})
    variance_disclaimer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('varianceDisclaimer') }})
    view_treemap_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewTreemapLabel') }})
    warning_audits_group_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warningAuditsGroupTitle') }})
    warning_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warningHeader') }})
    
