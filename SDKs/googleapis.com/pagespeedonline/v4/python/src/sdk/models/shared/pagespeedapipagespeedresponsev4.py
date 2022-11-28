from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class PagespeedAPIPagespeedResponseV4FormattedResultsRuleResultsURLBlocksUrls:
    details: Optional[List[PagespeedAPIFormatStringV4]] = field(default=None)
    result: Optional[PagespeedAPIFormatStringV4] = field(default=None)
    

@dataclass
class PagespeedAPIPagespeedResponseV4FormattedResultsRuleResultsURLBlocks:
    header: Optional[PagespeedAPIFormatStringV4] = field(default=None)
    urls: Optional[List[PagespeedAPIPagespeedResponseV4FormattedResultsRuleResultsURLBlocksUrls]] = field(default=None)
    

@dataclass
class PagespeedAPIPagespeedResponseV4FormattedResultsRuleResults:
    r"""PagespeedAPIPagespeedResponseV4FormattedResultsRuleResults
    The enum-like identifier for this rule. For instance \"EnableKeepAlive\" or \"AvoidCssImport\". Not localized.
    """
    
    beta: Optional[bool] = field(default=None)
    groups: Optional[List[str]] = field(default=None)
    localized_rule_name: Optional[str] = field(default=None)
    rule_impact: Optional[float] = field(default=None)
    summary: Optional[PagespeedAPIFormatStringV4] = field(default=None)
    url_blocks: Optional[List[PagespeedAPIPagespeedResponseV4FormattedResultsRuleResultsURLBlocks]] = field(default=None)
    

@dataclass
class PagespeedAPIPagespeedResponseV4FormattedResults:
    r"""PagespeedAPIPagespeedResponseV4FormattedResults
    Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
    """
    
    locale: Optional[str] = field(default=None)
    rule_results: Optional[dict[str, PagespeedAPIPagespeedResponseV4FormattedResultsRuleResults]] = field(default=None)
    

@dataclass
class PagespeedAPIPagespeedResponseV4LoadingExperienceMetricsDistributions:
    max: Optional[int] = field(default=None)
    min: Optional[int] = field(default=None)
    proportion: Optional[float] = field(default=None)
    

@dataclass
class PagespeedAPIPagespeedResponseV4LoadingExperienceMetrics:
    r"""PagespeedAPIPagespeedResponseV4LoadingExperienceMetrics
    The type of the metric.
    """
    
    category: Optional[str] = field(default=None)
    distributions: Optional[List[PagespeedAPIPagespeedResponseV4LoadingExperienceMetricsDistributions]] = field(default=None)
    median: Optional[int] = field(default=None)
    

@dataclass
class PagespeedAPIPagespeedResponseV4LoadingExperience:
    r"""PagespeedAPIPagespeedResponseV4LoadingExperience
    Metrics of end users' page loading experience.
    """
    
    id: Optional[str] = field(default=None)
    initial_url: Optional[str] = field(default=None)
    metrics: Optional[dict[str, PagespeedAPIPagespeedResponseV4LoadingExperienceMetrics]] = field(default=None)
    overall_category: Optional[str] = field(default=None)
    

@dataclass
class PagespeedAPIPagespeedResponseV4PageStats:
    r"""PagespeedAPIPagespeedResponseV4PageStats
    Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
    """
    
    cms: Optional[str] = field(default=None)
    css_response_bytes: Optional[str] = field(default=None)
    flash_response_bytes: Optional[str] = field(default=None)
    html_response_bytes: Optional[str] = field(default=None)
    image_response_bytes: Optional[str] = field(default=None)
    javascript_response_bytes: Optional[str] = field(default=None)
    num_render_blocking_round_trips: Optional[int] = field(default=None)
    num_total_round_trips: Optional[int] = field(default=None)
    number_css_resources: Optional[int] = field(default=None)
    number_hosts: Optional[int] = field(default=None)
    number_js_resources: Optional[int] = field(default=None)
    number_resources: Optional[int] = field(default=None)
    number_roboted_resources: Optional[int] = field(default=None)
    number_static_resources: Optional[int] = field(default=None)
    number_transient_fetch_failure_resources: Optional[int] = field(default=None)
    other_response_bytes: Optional[str] = field(default=None)
    over_the_wire_response_bytes: Optional[str] = field(default=None)
    roboted_urls: Optional[List[str]] = field(default=None)
    text_response_bytes: Optional[str] = field(default=None)
    total_request_bytes: Optional[str] = field(default=None)
    transient_fetch_failure_urls: Optional[List[str]] = field(default=None)
    

@dataclass
class PagespeedAPIPagespeedResponseV4RuleGroups:
    r"""PagespeedAPIPagespeedResponseV4RuleGroups
    The name of this rule group: one of \"SPEED\", \"USABILITY\", or \"SECURITY\".
    """
    
    pass_: Optional[bool] = field(default=None)
    score: Optional[int] = field(default=None)
    

@dataclass
class PagespeedAPIPagespeedResponseV4Version:
    r"""PagespeedAPIPagespeedResponseV4Version
    The version of PageSpeed used to generate these results.
    """
    
    major: Optional[int] = field(default=None)
    minor: Optional[int] = field(default=None)
    

@dataclass
class PagespeedAPIPagespeedResponseV4:
    captcha_result: Optional[str] = field(default=None)
    formatted_results: Optional[PagespeedAPIPagespeedResponseV4FormattedResults] = field(default=None)
    id: Optional[str] = field(default=None)
    invalid_rules: Optional[List[str]] = field(default=None)
    kind: Optional[str] = field(default=None)
    loading_experience: Optional[PagespeedAPIPagespeedResponseV4LoadingExperience] = field(default=None)
    page_stats: Optional[PagespeedAPIPagespeedResponseV4PageStats] = field(default=None)
    response_code: Optional[int] = field(default=None)
    rule_groups: Optional[dict[str, PagespeedAPIPagespeedResponseV4RuleGroups]] = field(default=None)
    screenshot: Optional[PagespeedAPIImageV4] = field(default=None)
    snapshots: Optional[List[PagespeedAPIImageV4]] = field(default=None)
    title: Optional[str] = field(default=None)
    version: Optional[PagespeedAPIPagespeedResponseV4Version] = field(default=None)
    
