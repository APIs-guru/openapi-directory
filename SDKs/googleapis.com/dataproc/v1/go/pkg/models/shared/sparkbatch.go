package shared

// SparkBatch
// A configuration for running an Apache Spark (https://spark.apache.org/) batch workload.
type SparkBatch struct {
	ArchiveUris    []string `json:"archiveUris,omitempty"`
	Args           []string `json:"args,omitempty"`
	FileUris       []string `json:"fileUris,omitempty"`
	JarFileUris    []string `json:"jarFileUris,omitempty"`
	MainClass      *string  `json:"mainClass,omitempty"`
	MainJarFileURI *string  `json:"mainJarFileUri,omitempty"`
}
