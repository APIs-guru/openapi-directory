package shared

type SoftwareRecipeStep struct {
	ArchiveExtraction *SoftwareRecipeStepExtractArchive `json:"archiveExtraction,omitempty"`
	DpkgInstallation  *SoftwareRecipeStepInstallDpkg    `json:"dpkgInstallation,omitempty"`
	FileCopy          *SoftwareRecipeStepCopyFile       `json:"fileCopy,omitempty"`
	FileExec          *SoftwareRecipeStepExecFile       `json:"fileExec,omitempty"`
	MsiInstallation   *SoftwareRecipeStepInstallMsi     `json:"msiInstallation,omitempty"`
	RpmInstallation   *SoftwareRecipeStepInstallRpm     `json:"rpmInstallation,omitempty"`
	ScriptRun         *SoftwareRecipeStepRunScript      `json:"scriptRun,omitempty"`
}
