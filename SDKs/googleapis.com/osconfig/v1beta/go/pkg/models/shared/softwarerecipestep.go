package shared

type SoftwareRecipeStep struct {
	ArchiveExtraction *SoftwareRecipeStepExtractArchive `json:"archiveExtraction"`
	DpkgInstallation  *SoftwareRecipeStepInstallDpkg    `json:"dpkgInstallation"`
	FileCopy          *SoftwareRecipeStepCopyFile       `json:"fileCopy"`
	FileExec          *SoftwareRecipeStepExecFile       `json:"fileExec"`
	MsiInstallation   *SoftwareRecipeStepInstallMsi     `json:"msiInstallation"`
	RpmInstallation   *SoftwareRecipeStepInstallRpm     `json:"rpmInstallation"`
	ScriptRun         *SoftwareRecipeStepRunScript      `json:"scriptRun"`
}
