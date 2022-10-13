package shared

type ReviewAuthor struct {
	DisplayName *string `json:"displayName"`
}

type ReviewSource struct {
	Description      *string `json:"description"`
	ExtraDescription *string `json:"extraDescription"`
	URL              *string `json:"url"`
}

type Review struct {
	Author      *ReviewAuthor `json:"author"`
	Content     *string       `json:"content"`
	Date        *string       `json:"date"`
	FullTextURL *string       `json:"fullTextUrl"`
	Kind        *string       `json:"kind"`
	Rating      *string       `json:"rating"`
	Source      *ReviewSource `json:"source"`
	Title       *string       `json:"title"`
	Type        *string       `json:"type"`
	VolumeID    *string       `json:"volumeId"`
}
