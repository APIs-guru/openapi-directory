from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betaruleboostaction
from . import googlecloudretailv2betacondition
from . import googlecloudretailv2betaruledonotassociateaction
from . import googlecloudretailv2betarulefilteraction
from . import googlecloudretailv2betaruleignoreaction
from . import googlecloudretailv2betaruleonewaysynonymsaction
from . import googlecloudretailv2betaruleredirectaction
from . import googlecloudretailv2betarulereplacementaction
from . import googlecloudretailv2betaruletwowaysynonymsaction


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaRule:
    boost_action: Optional[googlecloudretailv2betaruleboostaction.GoogleCloudRetailV2betaRuleBoostAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boostAction' }})
    condition: Optional[googlecloudretailv2betacondition.GoogleCloudRetailV2betaCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    do_not_associate_action: Optional[googlecloudretailv2betaruledonotassociateaction.GoogleCloudRetailV2betaRuleDoNotAssociateAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doNotAssociateAction' }})
    filter_action: Optional[googlecloudretailv2betarulefilteraction.GoogleCloudRetailV2betaRuleFilterAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterAction' }})
    ignore_action: Optional[googlecloudretailv2betaruleignoreaction.GoogleCloudRetailV2betaRuleIgnoreAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreAction' }})
    oneway_synonyms_action: Optional[googlecloudretailv2betaruleonewaysynonymsaction.GoogleCloudRetailV2betaRuleOnewaySynonymsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onewaySynonymsAction' }})
    redirect_action: Optional[googlecloudretailv2betaruleredirectaction.GoogleCloudRetailV2betaRuleRedirectAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectAction' }})
    replacement_action: Optional[googlecloudretailv2betarulereplacementaction.GoogleCloudRetailV2betaRuleReplacementAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replacementAction' }})
    twoway_synonyms_action: Optional[googlecloudretailv2betaruletwowaysynonymsaction.GoogleCloudRetailV2betaRuleTwowaySynonymsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twowaySynonymsAction' }})
    
