package shared

// FeatureIDProto
// A globally unique identifier associated with each feature. We use 128-bit identifiers so that we have lots of bits available to distinguish between features. The feature id currently consists of a 64-bit "cell id" that **sometimes** corresponds to the approximate centroid of the feature, plus a 64-bit fingerprint of other identifying information. See more on each respective field in its comments. Feature ids are first assigned when the data is created in MapFacts. After initial creation of the feature, they are immutable. This means that the only properties that you should rely on are that they are unique, and that cell_ids often - but not always - preserve spatial locality. The degree of locality varies as the feature undergoes geometry changes, and should not in general be considered a firm guarantee of the location of any particular feature. In fact, some locationless features have randomized cell IDs! Consumers of FeatureProtos from Mapfacts are guaranteed that fprints in the id field of features will be globally unique. Using the fprint allows consumers who don't need the spatial benefit of cell ids to uniquely identify features in a 64-bit address space. This property is not guaranteed for other sources of FeatureProtos.
type FeatureIDProto struct {
	CellID        *string                `json:"cellId,omitempty"`
	Fprint        *string                `json:"fprint,omitempty"`
	TemporaryData map[string]interface{} `json:"temporaryData,omitempty"`
}
