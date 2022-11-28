package shared

// Format
// The same asset can be represented in different formats, for example, a [WaveFront .obj](//en.wikipedia.org/wiki/Wavefront_.obj_file) file with its corresponding .mtl file or a [Khronos glTF](//www.khronos.org/gltf) file with its corresponding .glb binary data. A format refers to a specific representation of an asset and contains all information needed to retrieve and describe this representation.
type Format struct {
	FormatComplexity *FormatComplexity `json:"formatComplexity,omitempty"`
	FormatType       *string           `json:"formatType,omitempty"`
	Resources        []File            `json:"resources,omitempty"`
	Root             *File             `json:"root,omitempty"`
}
