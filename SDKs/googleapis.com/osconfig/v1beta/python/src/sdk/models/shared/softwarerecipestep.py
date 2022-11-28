from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SoftwareRecipeStep:
    r"""SoftwareRecipeStep
    An action that can be taken as part of installing or updating a recipe.
    """
    
    archive_extraction: Optional[SoftwareRecipeStepExtractArchive] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archiveExtraction') }})
    dpkg_installation: Optional[SoftwareRecipeStepInstallDpkg] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dpkgInstallation') }})
    file_copy: Optional[SoftwareRecipeStepCopyFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileCopy') }})
    file_exec: Optional[SoftwareRecipeStepExecFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileExec') }})
    msi_installation: Optional[SoftwareRecipeStepInstallMsi] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('msiInstallation') }})
    rpm_installation: Optional[SoftwareRecipeStepInstallRpm] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rpmInstallation') }})
    script_run: Optional[SoftwareRecipeStepRunScript] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptRun') }})
    
