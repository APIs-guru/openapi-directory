package shared

// HadoopJob
// A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html).
type HadoopJob struct {
	ArchiveUris    []string          `json:"archiveUris,omitempty"`
	Args           []string          `json:"args,omitempty"`
	FileUris       []string          `json:"fileUris,omitempty"`
	JarFileUris    []string          `json:"jarFileUris,omitempty"`
	LoggingConfig  *LoggingConfig    `json:"loggingConfig,omitempty"`
	MainClass      *string           `json:"mainClass,omitempty"`
	MainJarFileURI *string           `json:"mainJarFileUri,omitempty"`
	Properties     map[string]string `json:"properties,omitempty"`
}
