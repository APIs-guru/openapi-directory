from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ResultFormattedResultsRuleResultsURLBlocksUrls:
    details: Optional[List[PagespeedAPIFormatStringV2]] = field(default=None)
    result: Optional[PagespeedAPIFormatStringV2] = field(default=None)
    

@dataclass
class ResultFormattedResultsRuleResultsURLBlocks:
    header: Optional[PagespeedAPIFormatStringV2] = field(default=None)
    urls: Optional[List[ResultFormattedResultsRuleResultsURLBlocksUrls]] = field(default=None)
    

@dataclass
class ResultFormattedResultsRuleResults:
    r"""ResultFormattedResultsRuleResults
    The enum-like identifier for this rule. For instance \"EnableKeepAlive\" or \"AvoidCssImport\". Not localized.
    """
    
    groups: Optional[List[str]] = field(default=None)
    localized_rule_name: Optional[str] = field(default=None)
    rule_impact: Optional[float] = field(default=None)
    summary: Optional[PagespeedAPIFormatStringV2] = field(default=None)
    url_blocks: Optional[List[ResultFormattedResultsRuleResultsURLBlocks]] = field(default=None)
    

@dataclass
class ResultFormattedResults:
    r"""ResultFormattedResults
    Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
    """
    
    locale: Optional[str] = field(default=None)
    rule_results: Optional[dict[str, ResultFormattedResultsRuleResults]] = field(default=None)
    

@dataclass
class ResultPageStats:
    r"""ResultPageStats
    Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
    """
    
    css_response_bytes: Optional[str] = field(default=None)
    flash_response_bytes: Optional[str] = field(default=None)
    html_response_bytes: Optional[str] = field(default=None)
    image_response_bytes: Optional[str] = field(default=None)
    javascript_response_bytes: Optional[str] = field(default=None)
    number_css_resources: Optional[int] = field(default=None)
    number_hosts: Optional[int] = field(default=None)
    number_js_resources: Optional[int] = field(default=None)
    number_resources: Optional[int] = field(default=None)
    number_static_resources: Optional[int] = field(default=None)
    other_response_bytes: Optional[str] = field(default=None)
    text_response_bytes: Optional[str] = field(default=None)
    total_request_bytes: Optional[str] = field(default=None)
    

@dataclass
class ResultRuleGroups:
    r"""ResultRuleGroups
    The name of this rule group: one of \"SPEED\" or \"USABILITY\".
    """
    
    score: Optional[int] = field(default=None)
    

@dataclass
class ResultVersion:
    r"""ResultVersion
    The version of PageSpeed used to generate these results.
    """
    
    major: Optional[int] = field(default=None)
    minor: Optional[int] = field(default=None)
    

@dataclass
class Result:
    captcha_result: Optional[str] = field(default=None)
    formatted_results: Optional[ResultFormattedResults] = field(default=None)
    id: Optional[str] = field(default=None)
    invalid_rules: Optional[List[str]] = field(default=None)
    kind: Optional[str] = field(default=None)
    page_stats: Optional[ResultPageStats] = field(default=None)
    response_code: Optional[int] = field(default=None)
    rule_groups: Optional[dict[str, ResultRuleGroups]] = field(default=None)
    screenshot: Optional[PagespeedAPIImageV2] = field(default=None)
    title: Optional[str] = field(default=None)
    version: Optional[ResultVersion] = field(default=None)
    
