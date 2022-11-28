package shared

// GoogleCloudDatalabelingV1beta1AnnotationSpec
// Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`.
type GoogleCloudDatalabelingV1beta1AnnotationSpec struct {
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Index       *int32  `json:"index,omitempty"`
}
