package shared

type ItemCounts struct {
	AlbumCount      *int32 `json:"AlbumCount"`
	ArtistCount     *int32 `json:"ArtistCount"`
	BookCount       *int32 `json:"BookCount"`
	BoxSetCount     *int32 `json:"BoxSetCount"`
	EpisodeCount    *int32 `json:"EpisodeCount"`
	ItemCount       *int32 `json:"ItemCount"`
	MovieCount      *int32 `json:"MovieCount"`
	MusicVideoCount *int32 `json:"MusicVideoCount"`
	ProgramCount    *int32 `json:"ProgramCount"`
	SeriesCount     *int32 `json:"SeriesCount"`
	SongCount       *int32 `json:"SongCount"`
	TrailerCount    *int32 `json:"TrailerCount"`
}
