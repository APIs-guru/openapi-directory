package shared

type DocByline struct {
	Organization *string       `json:"organization,omitempty"`
	Original     *string       `json:"original,omitempty"`
	Person       []interface{} `json:"person,omitempty"`
}

type DocHeadline struct {
	Kicker *string `json:"kicker,omitempty"`
	Main   *string `json:"main,omitempty"`
}

type DocKeywords struct {
	Name  *string `json:"name,omitempty"`
	Rank  *string `json:"rank,omitempty"`
	Value *string `json:"value,omitempty"`
}

type DocMultimedia struct {
	Caption   *string `json:"caption,omitempty"`
	Copyright *string `json:"copyright,omitempty"`
	Format    *string `json:"format,omitempty"`
	Height    *int64  `json:"height,omitempty"`
	Subtype   *string `json:"subtype,omitempty"`
	Type      *string `json:"type,omitempty"`
	URL       *string `json:"url,omitempty"`
	Width     *int64  `json:"width,omitempty"`
}

type Doc struct {
	ID               *string         `json:"_id,omitempty"`
	Abstract         *string         `json:"abstract,omitempty"`
	Blog             []interface{}   `json:"blog,omitempty"`
	Byline           *DocByline      `json:"byline,omitempty"`
	DocumentType     *string         `json:"document_type,omitempty"`
	Headline         *DocHeadline    `json:"headline,omitempty"`
	Keywords         *DocKeywords    `json:"keywords,omitempty"`
	LeadParagraph    *string         `json:"lead_paragraph,omitempty"`
	Multimedia       []DocMultimedia `json:"multimedia,omitempty"`
	NewsDesk         *string         `json:"news_desk,omitempty"`
	PrintPage        *string         `json:"print_page,omitempty"`
	PubDate          *string         `json:"pub_date,omitempty"`
	SectionName      *string         `json:"section_name,omitempty"`
	SlideshowCredits *string         `json:"slideshow_credits,omitempty"`
	Snippet          *string         `json:"snippet,omitempty"`
	Source           *string         `json:"source,omitempty"`
	SubsectionName   *string         `json:"subsection_name,omitempty"`
	TypeOfMaterial   *string         `json:"type_of_material,omitempty"`
	WebURL           *string         `json:"web_url,omitempty"`
	WordCount        *string         `json:"word_count,omitempty"`
}
