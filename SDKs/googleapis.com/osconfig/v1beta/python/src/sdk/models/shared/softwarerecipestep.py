from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import softwarerecipestepextractarchive
from . import softwarerecipestepinstalldpkg
from . import softwarerecipestepcopyfile
from . import softwarerecipestepexecfile
from . import softwarerecipestepinstallmsi
from . import softwarerecipestepinstallrpm
from . import softwarerecipesteprunscript


@dataclass_json
@dataclass
class SoftwareRecipeStep:
    archive_extraction: Optional[softwarerecipestepextractarchive.SoftwareRecipeStepExtractArchive] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archiveExtraction' }})
    dpkg_installation: Optional[softwarerecipestepinstalldpkg.SoftwareRecipeStepInstallDpkg] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dpkgInstallation' }})
    file_copy: Optional[softwarerecipestepcopyfile.SoftwareRecipeStepCopyFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileCopy' }})
    file_exec: Optional[softwarerecipestepexecfile.SoftwareRecipeStepExecFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileExec' }})
    msi_installation: Optional[softwarerecipestepinstallmsi.SoftwareRecipeStepInstallMsi] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msiInstallation' }})
    rpm_installation: Optional[softwarerecipestepinstallrpm.SoftwareRecipeStepInstallRpm] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rpmInstallation' }})
    script_run: Optional[softwarerecipesteprunscript.SoftwareRecipeStepRunScript] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptRun' }})
    
