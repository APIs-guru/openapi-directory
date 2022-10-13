package shared

type DocByline struct {
	Organization *string       `json:"organization"`
	Original     *string       `json:"original"`
	Person       []interface{} `json:"person"`
}

type DocHeadline struct {
	Kicker *string `json:"kicker"`
	Main   *string `json:"main"`
}

type DocKeywords struct {
	Name  *string `json:"name"`
	Rank  *string `json:"rank"`
	Value *string `json:"value"`
}

type DocMultimedia struct {
	Caption   *string `json:"caption"`
	Copyright *string `json:"copyright"`
	Format    *string `json:"format"`
	Height    *int64  `json:"height"`
	Subtype   *string `json:"subtype"`
	Type      *string `json:"type"`
	URL       *string `json:"url"`
	Width     *int64  `json:"width"`
}

type Doc struct {
	ID               *string         `json:"_id"`
	Abstract         *string         `json:"abstract"`
	Blog             []interface{}   `json:"blog"`
	Byline           *DocByline      `json:"byline"`
	DocumentType     *string         `json:"document_type"`
	Headline         *DocHeadline    `json:"headline"`
	Keywords         *DocKeywords    `json:"keywords"`
	LeadParagraph    *string         `json:"lead_paragraph"`
	Multimedia       []DocMultimedia `json:"multimedia"`
	NewsDesk         *string         `json:"news_desk"`
	PrintPage        *string         `json:"print_page"`
	PubDate          *string         `json:"pub_date"`
	SectionName      *string         `json:"section_name"`
	SlideshowCredits *string         `json:"slideshow_credits"`
	Snippet          *string         `json:"snippet"`
	Source           *string         `json:"source"`
	SubsectionName   *string         `json:"subsection_name"`
	TypeOfMaterial   *string         `json:"type_of_material"`
	WebURL           *string         `json:"web_url"`
	WordCount        *string         `json:"word_count"`
}
