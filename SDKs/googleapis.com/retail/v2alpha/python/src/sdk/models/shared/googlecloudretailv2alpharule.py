from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alpharuleboostaction
from . import googlecloudretailv2alphacondition
from . import googlecloudretailv2alpharuledonotassociateaction
from . import googlecloudretailv2alpharulefilteraction
from . import googlecloudretailv2alpharuleignoreaction
from . import googlecloudretailv2alpharuleonewaysynonymsaction
from . import googlecloudretailv2alpharuleredirectaction
from . import googlecloudretailv2alpharulereplacementaction
from . import googlecloudretailv2alpharuletwowaysynonymsaction


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaRule:
    boost_action: Optional[googlecloudretailv2alpharuleboostaction.GoogleCloudRetailV2alphaRuleBoostAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boostAction' }})
    condition: Optional[googlecloudretailv2alphacondition.GoogleCloudRetailV2alphaCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    do_not_associate_action: Optional[googlecloudretailv2alpharuledonotassociateaction.GoogleCloudRetailV2alphaRuleDoNotAssociateAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doNotAssociateAction' }})
    filter_action: Optional[googlecloudretailv2alpharulefilteraction.GoogleCloudRetailV2alphaRuleFilterAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterAction' }})
    ignore_action: Optional[googlecloudretailv2alpharuleignoreaction.GoogleCloudRetailV2alphaRuleIgnoreAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreAction' }})
    oneway_synonyms_action: Optional[googlecloudretailv2alpharuleonewaysynonymsaction.GoogleCloudRetailV2alphaRuleOnewaySynonymsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onewaySynonymsAction' }})
    redirect_action: Optional[googlecloudretailv2alpharuleredirectaction.GoogleCloudRetailV2alphaRuleRedirectAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectAction' }})
    replacement_action: Optional[googlecloudretailv2alpharulereplacementaction.GoogleCloudRetailV2alphaRuleReplacementAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replacementAction' }})
    twoway_synonyms_action: Optional[googlecloudretailv2alpharuletwowaysynonymsaction.GoogleCloudRetailV2alphaRuleTwowaySynonymsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twowaySynonymsAction' }})
    
