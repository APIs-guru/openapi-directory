package shared



type PySparkBatch struct {
    ArchiveUris []string `json:"archiveUris,omitempty"`
    Args []string `json:"args,omitempty"`
    FileUris []string `json:"fileUris,omitempty"`
    JarFileUris []string `json:"jarFileUris,omitempty"`
    MainPythonFileURI *string `json:"mainPythonFileUri,omitempty"`
    PythonFileUris []string `json:"pythonFileUris,omitempty"`
    
}

