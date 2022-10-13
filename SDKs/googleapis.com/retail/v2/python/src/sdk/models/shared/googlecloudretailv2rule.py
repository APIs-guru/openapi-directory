from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2ruleboostaction
from . import googlecloudretailv2condition
from . import googlecloudretailv2ruledonotassociateaction
from . import googlecloudretailv2rulefilteraction
from . import googlecloudretailv2ruleignoreaction
from . import googlecloudretailv2ruleonewaysynonymsaction
from . import googlecloudretailv2ruleredirectaction
from . import googlecloudretailv2rulereplacementaction
from . import googlecloudretailv2ruletwowaysynonymsaction


@dataclass_json
@dataclass
class GoogleCloudRetailV2Rule:
    boost_action: Optional[googlecloudretailv2ruleboostaction.GoogleCloudRetailV2RuleBoostAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boostAction' }})
    condition: Optional[googlecloudretailv2condition.GoogleCloudRetailV2Condition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    do_not_associate_action: Optional[googlecloudretailv2ruledonotassociateaction.GoogleCloudRetailV2RuleDoNotAssociateAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doNotAssociateAction' }})
    filter_action: Optional[googlecloudretailv2rulefilteraction.GoogleCloudRetailV2RuleFilterAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterAction' }})
    ignore_action: Optional[googlecloudretailv2ruleignoreaction.GoogleCloudRetailV2RuleIgnoreAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreAction' }})
    oneway_synonyms_action: Optional[googlecloudretailv2ruleonewaysynonymsaction.GoogleCloudRetailV2RuleOnewaySynonymsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onewaySynonymsAction' }})
    redirect_action: Optional[googlecloudretailv2ruleredirectaction.GoogleCloudRetailV2RuleRedirectAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectAction' }})
    replacement_action: Optional[googlecloudretailv2rulereplacementaction.GoogleCloudRetailV2RuleReplacementAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replacementAction' }})
    twoway_synonyms_action: Optional[googlecloudretailv2ruletwowaysynonymsaction.GoogleCloudRetailV2RuleTwowaySynonymsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twowaySynonymsAction' }})
    
